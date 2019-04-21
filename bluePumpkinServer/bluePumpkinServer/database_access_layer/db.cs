using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using bluePumpkinServer.Models;
namespace bluePumpkinServer.database_access_layer
{
    public class db
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["con"].ConnectionString);

        public void AddEmployee(employee emp)
        {

            SqlCommand com = new SqlCommand("addEmp", con);
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@firstName",emp.firstName);
            com.Parameters.AddWithValue("@lastName",emp.lastName);
            com.Parameters.AddWithValue("@email",emp.email);
            com.Parameters.AddWithValue("@education",emp.education);
            com.Parameters.AddWithValue("@birthDate",DateTime.Parse(emp.birthDate));
            com.Parameters.AddWithValue("@profilePic",emp.profilePic);
            com.Parameters.AddWithValue("@createdAt",DateTime.Now.Date);
            com.Parameters.AddWithValue("@password",emp.password);
            com.Parameters.AddWithValue("@role",emp.role);
            con.Open();
            com.ExecuteNonQuery();
            con.Close();
        }
        public void AddEvent(@event evt)
        {
            SqlCommand com = new SqlCommand("addEvent", con);
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@eventTitle", evt.eventTitle);
            com.Parameters.AddWithValue("@eventSubTitle", evt.eventSubTitle);
            com.Parameters.AddWithValue("@eventDesc", evt.eventDesc);
            com.Parameters.AddWithValue("@eventTitleImg", evt.eventTitleImg);
            com.Parameters.AddWithValue("@EventSpecDep", evt.EventSpecDep);
            com.Parameters.AddWithValue("@EventDate", DateTime.Parse(evt.EventDate));
            com.Parameters.AddWithValue("@createdAt", DateTime.Now.Date);
            con.Open();
            com.ExecuteNonQuery();
            con.Close();
        }
    }
}