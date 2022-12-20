using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmEHistoryReview.DB.Model
{
    // Implemento la classe che rappresenterà a codice la tabella review
    [Table("review")]
    public class ReviewEntity
    {
        [Column("comment_id"), Key]
        public int CommentId { get; set; }

        [Column("user_id")]
        public int UserId { get; set; }

        [Column("movie_id")]
        public int MovieId { get; set; }

        [Column("rating")]
        public int Rating { get; set; }

        [Column("comment"), StringLength(255), DataType(DataType.Text)]
        public string Comment { get; set; }
    }
}
