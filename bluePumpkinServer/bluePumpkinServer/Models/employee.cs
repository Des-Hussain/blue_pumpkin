using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace bluePumpkinServer.Models
{
    public class employee
    {
        public int EmpId { get; set; }

        public string firstName { get; set; }

        public string lastName { get; set; }

        public string email { get; set; }

        public string education { get; set; }
        public string birthDate { get; set; }

        public string profilePic { get; set; }

        public string createdAt { get; set; }

        public string password { get; set; }

        public string role { get; set; }
    }
}