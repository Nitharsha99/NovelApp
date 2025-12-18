using Microsoft.EntityFrameworkCore;
using NovelApp.Model;

namespace NovelApp.DbConfiguaration
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Authors> Authors { get; set; }
        public DbSet<Books> Books { get; set; }
    }
}
