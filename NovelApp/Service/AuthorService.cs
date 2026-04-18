using Ardalis.GuardClauses;
using AutoMapper;
using NovelApp.Data;
using NovelApp.Data.Interfaces;
using NovelApp.Model;
using NovelApp.Model.ViewModels;
using NovelApp.Service.Interfaces;

namespace NovelApp.Service
{
    public class AuthorService : IAuthorService
    {
        private readonly IAuthorData _authorData;
        private readonly IMapper _mapper;

        public AuthorService(IAuthorData authorData, IMapper mapper)
        {
            this._authorData = authorData;
            this._mapper = mapper;
        }

        public async Task<List<Authors>> GetListAsync()
        {
            return await _authorData.GetListAsync();
        }

        public async Task<Authors> InsertAsync(AuthorAdd author)
        {
            Guard.Against.Null(author);

            var item = _mapper.Map<Authors>(author);
            return await _authorData.InsertAsync(item);
        }

        public async Task<Authors?> GetByIdAsync(int id)
        {
            Guard.Against.NegativeOrZero(id);
            return await _authorData.GetByIdAsync(id);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            Guard.Against.NegativeOrZero(id);
            return await _authorData.DeleteAsync(id);
        }
    }
}
