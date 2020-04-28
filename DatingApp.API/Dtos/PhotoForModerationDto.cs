using System;

namespace DatingApp.API.Dtos
{
    public class PhotoForModerationDto
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        // public string UserName { get; set; }
        // public string UserId { get; set; }
        public UserForPhotoModerationDto User { get; set; }
    }
}