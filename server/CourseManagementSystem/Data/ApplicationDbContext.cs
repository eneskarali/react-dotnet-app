using CourseManagementSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace CourseManagementSystem.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Course> Courses { get; set; }
        public DbSet<Assigment> Assigments { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
       
            builder.Entity<Assigment>()
                .HasOne(a => a.Course)
                .WithMany(c => c.Assigments);   

            base.OnModelCreating(builder);
        }
    }
}