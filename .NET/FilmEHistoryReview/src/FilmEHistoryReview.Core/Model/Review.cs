using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmEHistoryReview.Core.Model
{
    public class Review
    {
        private int _comment_id;
        private int _user_id;
        private int _movie_id;
        private string _comment;
        private int _rating;

        // Definisco il costruttore di Review
        public Review(int comment_id, int user_id, int movie_id, int rating, string comment)
        {
            _comment_id = comment_id;
            _user_id = user_id;
            _movie_id = movie_id;
            _rating = rating;
            _comment = comment;
        }

        // Definisco le properties di Review per tutti i suoi attributi
        public int CommentId
        {
            get { return _comment_id; }
        }

        public int UserId
        {
            get { return _user_id; }
            set { _user_id = value; }
        }

        public int MovieId
        {
            get { return _movie_id; }
            set { _movie_id = value; }
        }

        public int Rating
        {
            get { return _rating; }
            set { _rating = value; }
        }

        public string Comment
        {
            get { return _comment; }
            set { _comment = value; }
        }       
    }
}
