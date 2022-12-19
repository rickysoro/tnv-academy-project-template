using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmEHistoryReview.Core.Exceptions
{
    public class ReviewNotFoundException : Exception
    {
        public ReviewNotFoundException(int commentId) : base($"No review with id {commentId} was found")
        {
        }
    }
}
