using Microsoft.EntityFrameworkCore;
using NovelApp.Data.Interfaces;
using NovelApp.DbConfiguaration;
using NovelApp.Model;

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
            return await _context.Books.ToListAsync();
        }

        public async Task<Books> InsertAsync(Books book)
        {
            _context.Books.Add(book);
            await _context.SaveChangesAsync();
            return book;
        }
    }
}
