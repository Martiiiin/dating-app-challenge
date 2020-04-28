using System;

namespace DatingApp.API.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public bool IsMain { get; set; } = false;
        public string PublicId { get; set; }
        public bool isValidated { get; set; } = false;
        public User User { get; set; }
        public int UserId { get; set; }
    }
}