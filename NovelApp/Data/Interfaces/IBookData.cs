using NovelApp.Model;

namespace NovelApp.Data.Interfaces
{
    public interface IBookData
    {
        Task<List<Books>> GetListAsync();
        Task<Books> InsertAsync(Books book);
        Task<Books?> GetByIdAsync(int id);
        Task<bool> DeleteAsync(int id);
    }
}
