using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NovelApp.Model;
using NovelApp.Model.ViewModels;
using NovelApp.Service;
using NovelApp.Service.Interfaces;

namespace NovelApp.Controllers
{
    [Route("api/author")]
    [ApiController]
    public class AuthorController : ControllerBase
    {
        private readonly IAuthorService _authorService;
        public AuthorController(IAuthorService authorService)
        {
            _authorService = authorService;
        }

        [HttpGet]
        [Route("GetList")]
        public async Task<IActionResult> GetAuthors()
        {
            var authors = await _authorService.GetListAsync();
            return Ok(authors);
        }

        [HttpPost]
        [Route("Insert")]
        public async Task<IActionResult> AddAuthor(AuthorAdd author)
        {
            var result = await _authorService.InsertAsync(author);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetById")]
        public async Task<IActionResult> GetByAuthorId(int id)
        {
            var result = await _authorService.GetByIdAsync(id);
            return Ok(result);
        }
    }
}
