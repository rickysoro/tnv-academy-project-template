using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmEHistoryReview.Core.Exceptions
{
    public class RatingNotAllowedException : Exception
    {
        public RatingNotAllowedException() : base("Rating must be a value between 1 and 5") 
        { 
        }
    }
}
