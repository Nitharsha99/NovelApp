namespace NovelApp.Model
{
    public class Books
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string? Description { get; set; }
        public string AuthorId { get; set; }
        public string AuthorName { get; set; }
        public bool IsCompleted { get; set; }
        public bool IsAlreadyRead { get; set;}
        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }
    }
}
