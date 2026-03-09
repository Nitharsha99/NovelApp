using Microsoft.AspNetCore.Mvc;
using NovelApp.Model;
using NovelApp.Service.Interfaces;

namespace NovelApp.Controllers
{
    [Route("api/book")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;

        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet]
        [Route("GetList")]
        public async Task<IActionResult> GetBooks()
        {
            var books = await _bookService.GetListAsync();
            return Ok(books);
        }

        [HttpPost]
        [Route("Insert")]
        public async Task<IActionResult> AddBook(Books book)
        {
            var result = await _bookService.InsertAsync(book);
            return Ok(result);
        }
    }
}
