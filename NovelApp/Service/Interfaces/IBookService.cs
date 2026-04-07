using NovelApp.Model;
using NovelApp.Model.ViewModels;

namespace NovelApp.Service.Interfaces
{
    public interface IBookService
    {
        Task<List<BookView>> GetListAsync();
        Task<Books> InsertAsync(BookAdd book);
    }
}
