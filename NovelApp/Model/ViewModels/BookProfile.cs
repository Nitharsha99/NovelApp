using AutoMapper;

namespace NovelApp.Model.ViewModels
{
    public class BookProfile : Profile
    {
        public BookProfile()
        {
            CreateMap<BookAdd, Books>();
            CreateMap<Books, BookView>()
                .ForMember(dst => dst.AuthorId, opt => opt.MapFrom(src => src.Author.Id))
                .ForMember(dest => dest.Author, opt => opt.MapFrom(src => src.Author.Name));
        }
    }
}
