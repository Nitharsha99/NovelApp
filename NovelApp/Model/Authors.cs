namespace NovelApp.Model
{
    public class Authors
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsFollowing { get; set; }
        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }
    }
}
