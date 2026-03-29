using AutoMapper;

namespace NovelApp.Model.ViewModels
{
    public class AuthorProfile : Profile
    {
        public AuthorProfile()
        {
            CreateMap<AuthorAdd, Authors>();
        }
    }
}
