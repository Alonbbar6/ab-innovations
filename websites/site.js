// Language toggle (one language visible at a time) and optional Cloudflare Web Analytics.
(function () {
  // Paste your Cloudflare Web Analytics site token here to turn analytics on.
  var CF_ANALYTICS_TOKEN = "";

  var root = document.documentElement;
  function setLang(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    try { localStorage.setItem("bl-lang", lang); } catch (e) {}
  }
  var param = new URLSearchParams(location.search).get("lang");
  var saved = null;
  try { saved = localStorage.getItem("bl-lang"); } catch (e) {}
  var browser = (navigator.language || "en").slice(0, 2) === "es" ? "es" : "en";
  setLang(param === "es" || param === "en" ? param : saved || browser);
  var toggle = document.querySelector(".lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      setLang(root.getAttribute("data-lang") === "es" ? "en" : "es");
    });
  }

  if (CF_ANALYTICS_TOKEN) {
    var s = document.createElement("script");
    s.defer = true;
    s.src = "https://static.cloudflareinsights.com/beacon.min.js";
    s.setAttribute("data-cf-beacon", JSON.stringify({ token: CF_ANALYTICS_TOKEN }));
    document.head.appendChild(s);
  }
})();
