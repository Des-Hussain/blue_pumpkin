using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using bluePumpkinServer.Models;
namespace bluePumpkinServer.Controllers
{
    public class EventsController : ApiController
    {
        // GET: Events
        database_access_layer.db dbLayer = new database_access_layer.db();

        [HttpPost]
        public IHttpActionResult AddEvent([FromBody]@event evt)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                dbLayer.AddEvent(evt);
                return Ok("event Created Successfully");
            }
            catch (Exception e)
            {
                return Ok("Inter Server Error" + e);
            }
        }
    }
}