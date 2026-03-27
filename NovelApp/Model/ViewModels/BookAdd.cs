namespace NovelApp.Model.ViewModels
{
    public class BookAdd
    {
        public string Title { get; set; }
        public int AuthorId { get; set; }
        public string? Description { get; set; }
        public bool IsCompleted { get; set; }
        public bool IsAlreadyRead { get; set; }
    }
}
