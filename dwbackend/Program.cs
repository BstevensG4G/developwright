using dwbackend.models;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("BlogPosts") ?? "Data Source=blogposts.db";

//builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSqlite<BlogPostDb>(connectionString);
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo {
        Title = "BlogPost API",
        Description = "My portfolio blog posts",
        Version = "v1"});
});
builder.Services.AddCors(options => options.AddDefaultPolicy(builder => 
{ 
    builder.WithOrigins(
        "https://localhost:5173",
        "https://localhost:5173/blog");
}));

var app = builder.Build();

if (app.Environment.IsDevelopment()) {
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "BlogPost API");
    });
};

app.MapGet("/posts", async (BlogPostDb db) => await db.Posts.ToListAsync());

app.MapPost("/post", async (BlogPostDb db, BlogPost post ) =>
{
    await db.Posts.AddAsync(post);
    await db.SaveChangesAsync();
    return Results.Created($"/post/{post.Id}", post);
});
app.MapGet("/post/{id}", async (BlogPostDb db, int id) => await db.Posts.FindAsync(id));
app.MapPut("/post/{id}", async (BlogPostDb db, BlogPost updatepost, int id) =>
{
      var post = await db.Posts.FindAsync(id);
      if (post is null) return Results.NotFound();
      post.Title = updatepost.Title;
      post.Content = updatepost.Content;
      await db.SaveChangesAsync();
      return Results.NoContent();
});

app.MapDelete("/post/{id}", async (BlogPostDb db, int id) =>
{
   var post = await db.Posts.FindAsync(id);
   if (post is null)
   {
      return Results.NotFound();
   }
   db.Posts.Remove(post);
   await db.SaveChangesAsync();
   return Results.Ok();
});
 app.UseCors();

app.Run();
