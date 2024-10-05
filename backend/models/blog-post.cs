namespace dwbackend.models
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    public class BlogPost 
    { 
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Content { get; set; }
    }
class BlogPostDb : DbContext
{
    public BlogPostDb(DbContextOptions options) : base(options) { }
    public DbSet<BlogPost> Posts { get; set; } = null!;
}    
}