using FilmEHistoryReview.Core.Model;
using FilmEHistoryReview.DB.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmEHistoryReview.DB.Mapper
{
    // Implemento una classe che mi permetta di tradurre le righe della mia tabella in attributi del mio oggetto
    public class ReviewEntityMapper
    {
        public static Review From(ReviewEntity entity)
        {
            return new Review(entity.CommentId, entity.UserId, entity.MovieId, entity.Rating, entity.Comment);
        }
    }
}
