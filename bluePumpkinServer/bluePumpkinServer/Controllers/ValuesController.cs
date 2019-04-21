using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using bluePumpkinServer.Models;
namespace bluePumpkinServer.Controllers
{
    
    public class ValuesController : ApiController
    {
        database_access_layer.db dbLayer = new database_access_layer.db();

        [HttpPost]
        public IHttpActionResult AddEmployee([FromBody]employee emp)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                dbLayer.AddEmployee(emp);
                return Ok("Successfully Registered");
            }
            catch (Exception e)
            {
                return Ok("Fail, Internal Server Error");
            }
        }

        
    }
}
