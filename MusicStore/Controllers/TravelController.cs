using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MusicStore.Controllers
{
    public class TravelController : Controller
    {
        public IActionResult Main()
        {
            return View();
        }
    }
}
