using NovelApp.Data.Interfaces;
using NovelApp.Model;
using NovelApp.Service.Interfaces;

namespace NovelApp.Service
{
    public class BookService: IBookService
    {
        private readonly IBookData _bookData;
        public BookService(IBookData bookData)
        {
            _bookData = bookData;
        }

        public async Task<List<Books>> GetListAsync()
        {
            return await _bookData.GetListAsync();
        }

        public async Task<Books> InsertAsync(Books book)
        {
            return await _bookData.InsertAsync(book);
        }
    }
}
