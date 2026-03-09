using NovelApp.Model;

namespace NovelApp.Service.Interfaces
{
    public interface IBookService
    {
        Task<List<Books>> GetListAsync();
        Task<Books> InsertAsync(Books book);
    }
}
