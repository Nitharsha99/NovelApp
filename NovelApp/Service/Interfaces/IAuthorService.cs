using NovelApp.Model;
using NovelApp.Model.ViewModels;

namespace NovelApp.Service.Interfaces
{
    public interface IAuthorService
    {
        Task<List<Authors>> GetListAsync();
        Task<Authors> InsertAsync(AuthorAdd author);
        Task<Authors?> GetByIdAsync(int id);
        Task<bool> DeleteAsync(int id);
    }
}
