using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace FilmEHistoryReview.RestAPI.Model
{
    // Implemento una classe in grado di filtrare le informazioni dell'oggetto che voglio mostrare all'esterno
    public class ReviewDto
    {
        [DisplayName("comment_id")]
        public int CommentId { get; set; }

        [DisplayName("user_id")]
        public int UserId { get; set; }

        [DisplayName("movie_id")]
        public int MovieId { get; set; }

        [DisplayName("rating")]
        public int Rating { get; set; }

        [DisplayName("comment")]
        public string Comment { get; set; }
    }
}
