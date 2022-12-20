using FilmEHistoryReview.Core.Exceptions;
using FilmEHistoryReview.Core.Model;
using FilmEHistoryReview.Core.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmEHistoryReview.Core.Manager
{
    /*** Definisco la classe che mi consente di gestire la logica di business separandola dalle funzioni di storing, attraverso la dependency injection dell'interfaccia 
     * di storing nel costruttore ***/
    public class ReviewsManager
    {
        // Dichiaro l'interfaccia di storing
        IStorageService _iStorageService;

        // Definisco il costruttore della classe. Il costruttore sfrutterà la dependency injection, venendogli passata come argomento l'interfaccia di storing 
        public ReviewsManager(IStorageService iStorageService)
        {
            _iStorageService = iStorageService;
        }

        /*** Implemento il metodo per l'inserimento della review. Il metodo lancia un'eccezione e chiama la InsertReview dell'InMemoryStorageService attraverso
        * l'IStorageService ***/
        public Review InsertReview(int userId, int movieId, int rating, string comment)
        {
            if (comment.Length < 10) throw new TextTooShortException();
            else if (rating < 1 || rating > 5) throw new RatingNotAllowedException();
            return _iStorageService.InsertReview(userId, movieId, rating, comment);
        }

        // Implemento il metodo per la cancellazione della review
        public void DeleteReview(int commentId) => _iStorageService.DeleteReview(commentId);

        // Implemento il metodo per la visualizzazione a schermo di tutte le review
        public List<Review> GetAllReviews() => _iStorageService.GetAllReviews();

        // Implemento il metodo per la visualizzazione a schermo di una review dato il suo id
        public Review GetReview(int commentId) => _iStorageService.GetReview(commentId);

        /*** Implemento il metodo per l'aggiornamento di una review. Il metodo lancia un'eccezione e chiama la UpdateReview dell'InMemoryStorageService attraverso
         * l'IStorageService ***/
        public Review UpdateReview(int commentId, int rating, string comment)
        {
            if (comment.Length < 10) throw new TextTooShortException();
            else if (rating < 1 || rating > 5) throw new RatingNotAllowedException();
            return _iStorageService.UpdateReview(commentId, rating, comment);
        }
    }
}
