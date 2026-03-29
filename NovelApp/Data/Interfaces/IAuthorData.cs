using NovelApp.Model;

namespace NovelApp.Data.Interfaces
{
    public interface IAuthorData
    {
        Task<List<Authors>> GetListAsync();
        Task<Authors> InsertAsync(Authors author);
    }
}
