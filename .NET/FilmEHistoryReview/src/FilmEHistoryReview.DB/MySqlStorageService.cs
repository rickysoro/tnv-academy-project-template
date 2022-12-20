using FilmEHistoryReview.Core.Exceptions;
using FilmEHistoryReview.Core.Model;
using FilmEHistoryReview.Core.Service;
using FilmEHistoryReview.DB.Mapper;
using FilmEHistoryReview.DB.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmEHistoryReview.DB
{
    // Implemento la classe adibita allo storing dei dati nel DB. La classe estenderà IStorageService implementandone i suoi metodi
    public class MySqlStorageService : IStorageService
    {
        // Istanzio una variabie privata di tipo ApplicationContext 
        private ApplicationContext _applicationContext;

        /*** Definisco il costruttore creando un'istanza dell'Application Context e assicurandomi che la connessione al DB, in fase di avvio, vada a buon fine
        * attraverso il metodo EnsureCreated() ***/
        public MySqlStorageService()
        {
            _applicationContext= new ApplicationContext();
            _applicationContext.Database.EnsureCreated();
        }

        /*** Implemento il metodo per la cancellazione di una review. Il metodo chiama a sua volta FindReviewByIdOrFail che in caso di successo individua l'elemento
         * per id. La review viene rimosso dalla lista e l'ApplicationContext salva le sue modifiche ***/
        public void DeleteReview(int commentId)
        {
            var reviewToDelete = FindReviewByIdOrFail(commentId);
            _applicationContext.Reviews.Remove(reviewToDelete);
            _applicationContext.SaveChanges();
        }

        /*** Implemento il metodo per la visualizzazione a schermo di tutti gli elementi della lista. Il metodo usa la libreria Linq per prendere tutti gli elementi
         * dal Mapper e restituire oggetti di tipo Review all'interno di una lista ***/
        public List<Review> GetAllReviews() =>
            _applicationContext.Reviews.Select(reviewEntry => ReviewEntityMapper.From(reviewEntry)).ToList();

        /*** Implemento il metodo per la visualizzazione a schermo di un elemento per id. Il metodo chiama FindReviewByIdOrFail che in caso di successo restituisce 
         * l'elemento richiesto. L'elemento viene estrapolato dal Mapper e restituito ***/
        public Review GetReview(int commentId)
        {
            var reviewToGet = FindReviewByIdOrFail(commentId);
            return ReviewEntityMapper.From(reviewToGet);
        }

        /*** Implemento il metodo per l'inserimento di una nuova review. Viene creata una nuova istanza di ReviewEntity e assegnata a una variabile. La variabile
         * viene aggiunta alla lista attraverso l'ApplicationContext e vengono salvate le modifiche. Infine viene convertito l'oggetto dal Mapper in modo da 
         * restituire un oggetto di tipo Review ***/
        public Review InsertReview(int userId, int movieId, int rating, string comment)
        {
            var reviewToInsert = new ReviewEntity
            { UserId = userId, MovieId = movieId, Rating = rating, Comment = comment };

            _applicationContext.Reviews.Add(reviewToInsert);
            _applicationContext.SaveChanges();
            return ReviewEntityMapper.From(reviewToInsert);
        }

        /*** Implemento il metodo per l'aggiornamento della review. Il metodo chiama FindReviewByIdOrFail, assegna il valore a una variabile, salva le modifiche,
         * cambia l'attributo relativo al testo del commento (comment) della variabile e la restituisce aggiornata grazie alla conversione del Mapper ***/
        public Review UpdateReview(int commentId, int rating, string comment)
        {
            var reviewToUpdate = FindReviewByIdOrFail(commentId);
            reviewToUpdate.Comment = comment;
            reviewToUpdate.Rating = rating;
            _applicationContext.SaveChanges();
            return ReviewEntityMapper.From(reviewToUpdate);
        }

        /*** Implemento il metodo per l'individuazione di un elemento della lista per id. Se l'elemento è presente l'individuazione ha successo e il metodo
         * restituisce l'elemento richiesto di tipo ReviweEntity. Se l'elemento non è presente il metodo lancia un'eccezione ***/
        private ReviewEntity FindReviewByIdOrFail(int commentId)
        {
            var review = _applicationContext.Reviews.Find(commentId);
            if (review == null) throw new ReviewNotFoundException(commentId);
            return review;
        }
    }
}
