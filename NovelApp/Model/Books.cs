using NovelApp.Model.Enum;

namespace NovelApp.Model
{
    public class Books
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int AuthorId { get; set; }
        public string? Description { get; set; }
        public BookStatus Status { get; set; }
        public bool IsAlreadyRead { get; set;}
        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }
        public virtual Authors Author { get; set; }
    }
}
