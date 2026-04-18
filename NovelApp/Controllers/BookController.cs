using Ardalis.GuardClauses;
using Microsoft.AspNetCore.Mvc;
using NovelApp.Model;
using NovelApp.Model.ViewModels;
using NovelApp.Service;
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
        public async Task<IActionResult> AddBook(BookAdd book)
        {
            Guard.Against.Null(book);

            var result = await _bookService.InsertAsync(book);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetById")]
        public async Task<IActionResult> GetByBookId(int id)
        {
            Guard.Against.NegativeOrZero(id);

            var result = await _bookService.GetByIdAsync(id);
            return Ok(result);
        }

        [HttpDelete]
        [Route("Delete")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            Guard.Against.NegativeOrZero(id);

            var result = await _bookService.DeleteAsync(id);
            return Ok(result);
        }
    }
}
