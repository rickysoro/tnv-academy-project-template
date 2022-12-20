using FilmEHistoryReview.Core.Exceptions;
using FilmEHistoryReview.Core.Manager;
using FilmEHistoryReview.Core.Model;
using FilmEHistoryReview.RestAPI.Mapper;
using FilmEHistoryReview.RestAPI.Model;
using Microsoft.AspNetCore.Mvc;

namespace FilmEHistoryReview.RestAPI.Controllers
{
    // Implemento la classe che mi permette di esporre le chiamate Api della mia applicazione. La classe dovrà estendere la classe ControllerBase
    [ApiController]
    [Route("reviews")]
    public class ReviewController : ControllerBase
    {
        // Dichiaro una variabile di tipi ReviewsManage
        private ReviewsManager _reviewsManager;

        // Definisco il costruttore nel quale inietto il manager
        public ReviewController(ReviewsManager reviewsManager)
        {
            _reviewsManager = reviewsManager;
        }

        // Implemento il metodo che visualizza a schermo tutte le review. Il metodo rende codice 200
        [HttpGet]
        public ActionResult<List<Review>> GetAllReviews() => Ok(_reviewsManager.GetAllReviews().Select(review => ReviewDtoMapper.From(review)).ToList());

        // Implemento il metodo che visualizza a schermo una review per id. Il metodo gestisce un'eccezione e restituisce un ReviewDto con codice 200
        [HttpGet]
        [Route("/{comment-id}")]
        public ActionResult<Review> GetReview([FromRoute(Name = "comment-id")]int commentId)
        {
            try
            {
                var reviewToGet = _reviewsManager.GetReview(commentId);
                return Ok(ReviewDtoMapper.From(reviewToGet));
            }
            catch (ReviewNotFoundException exception)
            {
                return NotFound(new ErrorResponse(exception.Message));
            }
        }

        /*** Implemento il metodo per l'inserimento di una nuova review. Il metodo gestisce due eccezioni, chiama il metodo InsertReview, crea un nuovo uri
         * e lo restituisce insieme a un oggetto ReviewDto con codice 201 ***/
        [HttpPost]
        public ActionResult<ReviewDto> InsertReview([FromBody] ReviewRequest body) 
        {
            try
            {
                var insertedReview = _reviewsManager.InsertReview(body.UserId, body.MovieId, body.Rating, body.Comment);
                var uri = $"/reviews/{insertedReview.CommentId}";
                return Created(uri, ReviewDtoMapper.From(insertedReview));
            }
            catch (TextTooShortException tooShortException)
            {
                return BadRequest(new ErrorResponse(tooShortException.Message));
            }
            catch (RatingNotAllowedException ratingException)
            {
                return BadRequest(new ErrorResponse(ratingException.Message));
            }
        }

        /*** Implemento il metodo per l'aggiornamento di una review. Il metodo gestisce tre eccezioni (commento non trovato, testo troppo corto e voto non ammesso), 
         * chiama la UpdateReview e restituisce un oggetto ReviewDto con codice 200 ***/
        [HttpPut]
        [Route("/{comment-id}")]
        public ActionResult<ReviewDto> UpdateReview([FromRoute(Name = "comment-id")]int commentId, int rating, string comment)
        {
            try
            {
                var updatedReview = _reviewsManager.UpdateReview(commentId, rating, comment);
                return Ok(ReviewDtoMapper.From(updatedReview));
            }
            catch (ReviewNotFoundException notFoundException)
            {
                return NotFound(new ErrorResponse(notFoundException.Message));
            }
            catch (TextTooShortException tooShortException)
            {
                return BadRequest(new ErrorResponse(tooShortException.Message));
            }
            catch (RatingNotAllowedException ratingException)
            {
                return BadRequest(new ErrorResponse(ratingException.Message));
            }
        }

        /*** Implemento il metodo per la cancellazione di una review. Il metodo chiama la DeleteReview e gestice l'eccezione relativa al commento
         * non trovato. Restituisce true se la cancellazione va a buon fine ***/
        [HttpDelete]
        [Route("/{comment-id}")]
        public ActionResult<bool> DeleteReview([FromRoute(Name = "comment-id")]int commentId)
        {
            try
            {
                _reviewsManager.DeleteReview(commentId);
                return true;
            }

            catch (ReviewNotFoundException exception)
            {
                return NotFound(new ErrorResponse(exception.Message));
            }
        }
    }
}
