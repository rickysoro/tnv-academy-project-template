using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmEHistoryReview.Core.Exceptions
{
    public class TextTooShortException : Exception
    {
        public TextTooShortException() : base("Text is too short. Insert a review with at least 10 characters")
        {
        }
    }
}
