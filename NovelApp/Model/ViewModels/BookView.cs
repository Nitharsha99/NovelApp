using NovelApp.Model.Enum;

namespace NovelApp.Model.ViewModels
{
    public class BookView
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int AuthorId { get; set; }
        public string Author { get; set; }
        public BookStatus Status { get; set; }
        public bool IsAlreadyRead { get; set; }
    }
}
