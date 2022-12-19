using FilmEHistoryReview.Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmEHistoryReview.Core.Service
{
    // Definisco l'interfaccia IStorageService che dichiarerà i metodi per le funzionalità CRUD dell'applicazione
    public interface IStorageService
    {
        public Review InsertReview(int userId, int movieId, int rating, string comment);

        public void DeleteReview(int commentId);

        public List<Review> GetAllReviews();

        public Review GetReview(int commentId);

        public Review UpdateReview(int commentId, int rating, string comment);
    }
}
