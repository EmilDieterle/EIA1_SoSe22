var L07;
(function (L07) {
    window.addEventListener("load", function () {
        var populationEU = 447.01;
        var countryGER = "Deutschland";
        var populationGER = 83.16;
        var populationGERFuture = 82.67;
        var countryFRA = "Frankreich";
        var populationFRA = 67.44;
        var populationFRAFuture = 70.01;
        var countryITA = "Italien";
        var populationITA = 59.26;
        var populationITAFuture = 58.13;
        var countrySPA = "Spanien";
        var populationSPA = 47.39;
        var populationSPAFuture = 49.35;
        var selectorGER = document.getElementById("germany");
        selectorGER.addEventListener("click", function () {
            document.getElementById("headlinePopulation2021").innerHTML = populationGER + "Mio";
            document.getElementById("headlineRelativePopulation").innerHTML = (populationGER * 100 / populationEU).toFixed(2) + "%";
            document.getElementById("headlineGrowthRate").innerHTML = ((populationGERFuture - populationGER) / populationGER * 100).toFixed(2) + "%";
            document.getElementById("headlinePopulation2050").innerHTML = populationGERFuture + "Mio";
            document.querySelector("#ger").setAttribute("class", "wrapper active");
            document.querySelector("#fra").setAttribute("class", "wrapper");
            document.querySelector("#ita").setAttribute("class", "wrapper");
            document.querySelector("#spa").setAttribute("class", "wrapper");
            document.querySelector("#chart").setAttribute("style", "height: 18.60%");
        });
        var selectorFRA = document.getElementById("france");
        selectorFRA.addEventListener("click", function () {
            document.getElementById("headlinePopulation2021").innerHTML = populationFRA + "Mio";
            document.getElementById("headlineRelativePopulation").innerHTML = (populationFRA * 100 / populationEU).toFixed(2) + "%";
            document.getElementById("headlineGrowthRate").innerHTML = ((populationFRAFuture - populationFRA) / populationFRA * 100).toFixed(2) + "%";
            document.getElementById("headlinePopulation2050").innerHTML = populationFRAFuture + "Mio";
            document.querySelector("#fra").setAttribute("class", "wrapper active");
            document.querySelector("#ger").setAttribute("class", "wrapper");
            document.querySelector("#ita").setAttribute("class", "wrapper");
            document.querySelector("#spa").setAttribute("class", "wrapper");
            document.querySelector("#chart").setAttribute("style", "height: 15.09%");
        });
        var selectorITA = document.getElementById("italy");
        selectorITA.addEventListener("click", function () {
            document.getElementById("headlinePopulation2021").innerHTML = populationITA + "Mio";
            document.getElementById("headlineRelativePopulation").innerHTML = (populationITA * 100 / populationEU).toFixed(2) + "%";
            document.getElementById("headlineGrowthRate").innerHTML = ((populationITAFuture - populationITA) / populationITA * 100).toFixed(2) + "%";
            document.getElementById("headlinePopulation2050").innerHTML = populationITAFuture + "Mio";
            document.querySelector("#ita").setAttribute("class", "wrapper active");
            document.querySelector("#ger").setAttribute("class", "wrapper");
            document.querySelector("#fra").setAttribute("class", "wrapper");
            document.querySelector("#spa").setAttribute("class", "wrapper");
            document.querySelector("#chart").setAttribute("style", "height: 13.26%");
        });
        var selectorSPA = document.getElementById("spain");
        selectorSPA.addEventListener("click", function () {
            document.getElementById("headlinePopulation2021").innerHTML = populationSPA + "Mio";
            document.getElementById("headlineRelativePopulation").innerHTML = (populationSPA * 100 / populationEU).toFixed(2) + "%";
            document.getElementById("headlineGrowthRate").innerHTML = ((populationSPAFuture - populationSPA) / populationSPA * 100).toFixed(2) + "%";
            document.getElementById("headlinePopulation2050").innerHTML = populationSPAFuture + "Mio";
            document.querySelector("#spa").setAttribute("class", "wrapper active");
            document.querySelector("#ger").setAttribute("class", "wrapper");
            document.querySelector("#fra").setAttribute("class", "wrapper");
            document.querySelector("#ita").setAttribute("class", "wrapper");
            document.querySelector("#chart").setAttribute("style", "height: 10.60%");
        });
    });
})(L07 || (L07 = {}));
//# sourceMappingURL=script.js.map