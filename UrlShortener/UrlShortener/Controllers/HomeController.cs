using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text.RegularExpressions;
using System.Web.Mvc;

namespace UrlShortener.Controllers {
    public class HomeController : Controller {
        public ActionResult Index() {
            return View();
        }

        static List<List<string>> indexes = new List<List<string>>();

        public ActionResult GetUrl(string id) {
            var element = (from sublist in indexes
                           where sublist[1].Equals(id)
                           select sublist).FirstOrDefault();

            id = element[0];
            id = id.Contains("https://www.") ? id : id.Substring(0, 3) == "www" ? "https://" + id : "https://www." + id;
            return Redirect(id);
        }

        public string SetUrl(string inputURL) {
            var regexItem = new Regex("^[a-zA-Z0-9 ]*$");

            var element = (from sublist in indexes
                           where sublist[0].Equals(inputURL)
                           select sublist).FirstOrDefault();
            if (element == null) {

                var index = "";
                while (regexItem.IsMatch(index))
                    index = get_unique_string(6);

                indexes.Add((new List<string> { inputURL, index.Remove(index.Length - 1) }));

                return index.Remove(index.Length - 1);
            } else
                return element[1];
        }

        string get_unique_string(int string_length) {
            using (var rng = new RNGCryptoServiceProvider()) {
                var bit_count = (string_length * 6);
                var byte_count = ((bit_count + 7) / 8); // rounded up
                var bytes = new byte[byte_count];
                rng.GetBytes(bytes);
                return Convert.ToBase64String(bytes);
            }
        }
    }
}