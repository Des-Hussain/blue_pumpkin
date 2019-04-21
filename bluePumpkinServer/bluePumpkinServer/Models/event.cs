using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace bluePumpkinServer.Models
{
    public class @event
    {
        public int eventId { get; set; }

        public string eventTitle { get; set; }

        public string eventSubTitle { get; set; }

        public string eventDesc { get; set; }

        public string eventTitleImg { get; set; }

        public string EventSpecDep { get; set; }

        public string EventDate { get; set; }

        public string createdAt { get; set; }

    }
}