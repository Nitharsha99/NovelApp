using AutoMapper;
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

        public async Task<List<Books>> GetListAsync()
        {
            return await _bookData.GetListAsync();
        }

        public async Task<Books> InsertAsync(BookAdd book)
        {
            var item = _mapper.Map<Books>(book);
            return await _bookData.InsertAsync(item);
        }
    }
}
