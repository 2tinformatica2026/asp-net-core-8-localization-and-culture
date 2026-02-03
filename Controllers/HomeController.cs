using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Diagnostics;
using System.Diagnostics;
using [Application Name].UserLocalization;
namespace [Application Name].Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            Localization.SetCultureInfoOnPostBack(HttpContext);
            return View();
        }
    }
}
