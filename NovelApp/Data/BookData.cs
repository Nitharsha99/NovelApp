using Ardalis.GuardClauses;
using Microsoft.EntityFrameworkCore;
using NovelApp.Data.Interfaces;
using NovelApp.DbConfiguaration;
using NovelApp.Model;
using NovelApp.Model.ViewModels;

namespace NovelApp.Data
{
    public class BookData: IBookData
    {
        private readonly AppDbContext _context;

        public BookData(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<Books>> GetListAsync()
        {
            return await _context.Books
                 .Include(b => b.Author)
                 .ToListAsync();
        }

        public async Task<Books> InsertAsync(Books book)
        {
            Guard.Against.Null(book);

            book.Created = DateTime.Now;
            book.Updated = DateTime.Now;

            _context.Books.Add(book);
            await _context.SaveChangesAsync();
            return book;
        }

        public async Task<Books?> GetByIdAsync(int id)
        {
            Guard.Against.NegativeOrZero(id, nameof(id));

            return await _context.Books
                          .FirstOrDefaultAsync(a => a.Id == id);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            Guard.Against.NegativeOrZero(id, nameof(id));

            var item = await GetByIdAsync(id);
            if (item == null)
            {
                return false;
            }

            _context.Books.Remove(item);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}
