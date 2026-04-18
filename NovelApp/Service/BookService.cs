using Ardalis.GuardClauses;
using AutoMapper;
using NovelApp.Data;
using NovelApp.Data.Interfaces;
using NovelApp.Model;
using NovelApp.Model.ViewModels;
using NovelApp.Service.Interfaces;

namespace NovelApp.Service
{
    public class BookService: IBookService
    {
        private readonly IBookData _bookData;
        private readonly IMapper _mapper;
        public BookService(IBookData bookData, IMapper mapper)
        {
            _bookData = bookData;
            _mapper = mapper;
        }

        public async Task<List<BookView>> GetListAsync()
        {
            var books = await _bookData.GetListAsync();


            var booksView = books.Select(b => new BookView
            {
                Id = b.Id,
                Title = b.Title,
                AuthorId = b.AuthorId,
                Author = b.Author.Name, 
                Status = b.Status,
                IsAlreadyRead = b.IsAlreadyRead,
            }).ToList();

            return booksView;
        }

        public async Task<Books> InsertAsync(BookAdd book)
        {
            Guard.Against.Null(book);
            var item = _mapper.Map<Books>(book);
            return await _bookData.InsertAsync(item);
        }

        public async Task<Books?> GetByIdAsync(int id)
        {
            Guard.Against.NegativeOrZero(id);
            return await _bookData.GetByIdAsync(id);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            Guard.Against.NegativeOrZero(id);
            return await _bookData.DeleteAsync(id);
        }
    }
}
