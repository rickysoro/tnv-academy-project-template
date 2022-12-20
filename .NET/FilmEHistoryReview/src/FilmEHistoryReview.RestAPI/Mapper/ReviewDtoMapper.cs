using FilmEHistoryReview.Core.Model;
using FilmEHistoryReview.RestAPI.Model;

namespace FilmEHistoryReview.RestAPI.Mapper
{
    // Implemento una classe che ha il compito di convertire il mio oggetto, in modo da slegarlo dall'implementazione che ne faccio nel progetto Core
    public class ReviewDtoMapper
    {
        // Definisco il costruttore che traduce l'oggetto di tipo Review e i suoi attributi in ReviewDto
        public static ReviewDto From(Review review) => new ReviewDto
        {
            CommentId = review.CommentId,
            UserId = review.UserId,
            MovieId = review.MovieId,
            Rating= review.Rating,
            Comment = review.Comment,
        };
    }
}
