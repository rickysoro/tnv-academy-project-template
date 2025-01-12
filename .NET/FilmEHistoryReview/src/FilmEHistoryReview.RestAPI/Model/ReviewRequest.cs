﻿using System.ComponentModel;

namespace FilmEHistoryReview.RestAPI.Model
{
    // Implemento una classe che mi permetta di vedere le sole informazioni che l'utente trasmette attraverso l'applicazione
    public class ReviewRequest
    {
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
