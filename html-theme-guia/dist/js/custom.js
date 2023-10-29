(function () {
  "use strict";

  // Custom scripts
  document.addEventListener("DOMContentLoaded", function () {
    // Live Awesomplete Search
    var inputHero = document.getElementById("search-hero");

    var list = [
      { label: "Филозофија", value: "pages/filozofija.html" },
      { label: "Грађанско", value: "pages/gradjansko.html" },
      { label: "Социологија", value: "pages/sociologija.html" },
      { label: "Питања", value: "pages/pitanja.html" },
      {
        label: "Дефиниција Филозофије",
        value: "pages/definicija-filozofije.html",
      },
      { label: "Шта је истина?", value: "pages/sta-je-istina.html" },
      {
        label: "Шта је то Филозофија?",
        value: "pages/sta-je-to-filozofija.html",
      },
      { label: "Увод у Филозофију", value: "pages/uvod-u-filozofiju.html" },
      { label: "Значење Филозофије", value: "pages/znacenje-filozofije.html" },
      {
        label: "Прво полугодиште Филозофија",
        value: "pages/pitanja-za-prvo-polugodiste.html",
      },
    ];

    if (inputHero) {
      inputHero.addEventListener(
        "awesomplete-selectcomplete",
        function (e) {
          window.location.href = e.text.value;
        },
        false
      );

      new Awesomplete(inputHero, {
        autoFirst: true,
        list: list,
        replace: function (suggestion) {
          this.input.value = suggestion.label;
        },
      });
    }
  });
})();
