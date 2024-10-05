Certainly! Deploying an Angular frontend and a .NET Core Minimal API backend in Docker containers with Traefik as your reverse proxy and load balancer is a great approach for modern web applications. Here’s how you can set this up:

### Step-by-Step Guide

#### 1. **Set Up Your VPS**
   - Start with a fresh VPS running Ubuntu (recommended).
   - Update your system:
     ```bash
     sudo apt update && sudo apt upgrade -y
     ```

#### 2. **Install Docker and Docker Compose**
   - Install Docker:
     ```bash
     sudo apt install apt-transport-https ca-certificates curl software-properties-common
     curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
     sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
     sudo apt update
     sudo apt install docker-ce
     ```
   - Install Docker Compose:
     ```bash
     sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
     sudo chmod +x /usr/local/bin/docker-compose
     ```

#### 3. **Create Your Project Structure**
   - Set up a directory for your project:
     ```bash
     mkdir my-project && cd my-project
     ```

   - Create subdirectories for your Angular app, .NET Core API, and Docker configuration:
     ```bash
     mkdir angular-app dotnet-api docker
     ```

#### 4. **Set Up Your Angular Application**
   - Create your Angular app using the Angular CLI:
     ```bash
     cd angular-app
     ng new my-angular-app --routing --style=scss
     cd my-angular-app
     ```

   - Create a Dockerfile for your Angular app:
     ```dockerfile
     # angular-app/Dockerfile
     FROM node:14 AS build
     WORKDIR /app
     COPY package*.json ./
     RUN npm install
     COPY . .
     RUN npm run build --prod

     FROM nginx:alpine
     COPY --from=build /app/dist/my-angular-app /usr/share/nginx/html
     EXPOSE 80
     CMD ["nginx", "-g", "daemon off;"]
     ```

#### 5. **Set Up Your .NET Core Minimal API**
   - Create a new .NET Core project:
     ```bash
     cd ../dotnet-api
     dotnet new webapi -n MyDotNetApi
     cd MyDotNetApi
     ```

   - Modify your `Startup.cs` to use a minimal API:
     ```csharp
     public class Startup
     {
         public void ConfigureServices(IServiceCollection services)
         {
             services.AddCors(options =>
             {
                 options.AddPolicy("AllowAll", builder =>
                 {
                     builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                 });
             });
         }

         public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
         {
             app.UseCors("AllowAll");
             app.UseRouting();
             app.UseEndpoints(endpoints =>
             {
                 endpoints.MapGet("/api/hello", () => "Hello from .NET Core!");
             });
         }
     }
     ```

   - Create a Dockerfile for your .NET Core API:
     ```dockerfile
     # dotnet-api/Dockerfile
     FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
     WORKDIR /app
     EXPOSE 80

     FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
     WORKDIR /src
     COPY ["MyDotNetApi/MyDotNetApi.csproj", "MyDotNetApi/"]
     RUN dotnet restore "MyDotNetApi/MyDotNetApi.csproj"
     COPY . .
     WORKDIR "/src/MyDotNetApi"
     RUN dotnet build "MyDotNetApi.csproj" -c Release -o /app/build

     FROM build AS publish
     RUN dotnet publish "MyDotNetApi.csproj" -c Release -o /app/publish

     FROM base AS final
     WORKDIR /app
     COPY --from=publish /app/publish .
     ENTRYPOINT ["dotnet", "MyDotNetApi.dll"]
     ```

#### 6. **Set Up Traefik**
   - Create a `docker-compose.yml` file in the `docker` directory:
     ```yaml
     version: '3.8'
     services:
       traefik:
         image: traefik:v2.5
         command:
           - "--api.insecure=true"
           - "--providers.docker=true"
           - "--entrypoints.web.address=:80"
         ports:
           - "80:80"
           - "8080:8080" # Traefik dashboard
         volumes:
           - "/var/run/docker.sock:/var/run/docker.sock"

       angular-app:
         build:
           context: ./angular-app/my-angular-app
         labels:
           - "traefik.enable=true"
           - "traefik.http.routers.angular.rule=Host(`your-domain.com`)"
           - "traefik.http.services.angular.loadbalancer.server.port=80"

       dotnet-api:
         build:
           context: ./dotnet-api/MyDotNetApi
         labels:
           - "traefik.enable=true"
           - "traefik.http.routers.api.rule=Host(`api.your-domain.com`)"
           - "traefik.http.services.api.loadbalancer.server.port=80"
     ```

#### 7. **Deploy Everything with Docker Compose**
   - From the root of your project, run:
     ```bash
     docker-compose up -d
     ```

#### 8. **Access Your Applications**
   - Your Angular app should be accessible at `http://your-domain.com`.
   - Your .NET Core API should be accessible at `http://api.your-domain.com`.

### 9. **Secure Your Setup**
   - For SSL, you can add Traefik's Let's Encrypt support. Modify the Traefik service in `docker-compose.yml` to include:
     ```yaml
     command:
       - "--certificatesresolvers.mytls.acme.email=your-email@example.com"
       - "--certificatesresolvers.mytls.acme.storage=/acme.json"
       - "--certificatesresolvers.mytls.acme.tlschallenge=true"
     volumes:
       - "/var/run/docker.sock:/var/run/docker.sock"
       - "./acme.json:/acme.json"
     ```
   - Create `acme.json` with proper permissions:
     ```bash
     touch acme.json
     chmod 600 acme.json
     ```

### 10. **Final Steps**
- Ensure your domain's DNS settings point to your VPS IP.
- Monitor your services with the Traefik dashboard at `http://your-vps-ip:8080`.

This setup should give you a robust environment for your Angular frontend and .NET Core backend with Docker and Traefik. Let me know if you have further questions or need clarification on any step!