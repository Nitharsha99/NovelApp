using AutoMapper;

namespace NovelApp.Model.ViewModels
{
    public class BookProfile : Profile
    {
        public BookProfile()
        {
            CreateMap<BookAdd, Books>();
        }
    }
}
