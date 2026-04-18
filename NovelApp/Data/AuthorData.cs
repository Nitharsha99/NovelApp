using Ardalis.GuardClauses;
using Microsoft.EntityFrameworkCore;
using NovelApp.Data.Interfaces;
using NovelApp.DbConfiguaration;
using NovelApp.Model;
using System.Runtime.Versioning;

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
            Guard.Against.Null(author, nameof(author));

            author.Created = DateTime.Now;
            author.Updated = DateTime.Now;

            _context.Authors.Add(author);
            await _context.SaveChangesAsync();
            return author;
        }

        public async Task<Authors?> GetByIdAsync(int id)
        {
            Guard.Against.NegativeOrZero(id, nameof(id));

            return await _context.Authors
                          .FirstOrDefaultAsync(a => a.Id == id);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            Guard.Against.NegativeOrZero(id, nameof(id));

            var item = await GetByIdAsync(id);
            if(item == null)
            {
                return false;
            }

            _context.Authors.Remove(item);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}
