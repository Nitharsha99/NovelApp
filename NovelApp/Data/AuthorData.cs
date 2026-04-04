using Microsoft.EntityFrameworkCore;
using NovelApp.Data.Interfaces;
using NovelApp.DbConfiguaration;
using NovelApp.Model;

namespace NovelApp.Data
{
    public class AuthorData: IAuthorData
    {
        private readonly AppDbContext _context;

        public AuthorData(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<Authors>> GetListAsync()
        {
            return await _context.Authors.ToListAsync();
        }

        public async Task<Authors> InsertAsync(Authors author)
        {
            author.Created = DateTime.Now;
            author.Updated = DateTime.Now;
            _context.Authors.Add(author);
            await _context.SaveChangesAsync();
            return author;
        }

        public async Task<Authors?> GetByIdAsync(int id)
        {
            return await _context.Authors
                          .FirstOrDefaultAsync(a => a.Id == id);
        }
    }
}
