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
            //document.getElementsByClassName("wrapper.active").;
            //document.getElementById("chart"). = (100*populationEU) / populationGER;
        });
        var selectorFRA = document.getElementById("france");
        selectorFRA.addEventListener("click", function () {
            document.getElementById("headlinePopulation2021").innerHTML = populationFRA + "Mio";
            document.getElementById("headlineRelativePopulation").innerHTML = (populationFRA * 100 / populationEU).toFixed(2) + "%";
            document.getElementById("headlineGrowthRate").innerHTML = ((populationFRAFuture - populationFRA) / populationFRA * 100).toFixed(2) + "%";
            document.getElementById("headlinePopulation2050").innerHTML = populationFRAFuture + "Mio";
            //document.getElementsByClassName("wrapper.active").;
            //document.getElementById("chart"). = (100*populationEU) / populationFRA;
        });
        var selectorITA = document.getElementById("italy");
        selectorITA.addEventListener("click", function () {
            document.getElementById("headlinePopulation2021").innerHTML = populationITA + "Mio";
            document.getElementById("headlineRelativePopulation").innerHTML = (populationITA * 100 / populationEU).toFixed(2) + "%";
            document.getElementById("headlineGrowthRate").innerHTML = ((populationITAFuture - populationITA) / populationITA * 100).toFixed(2) + "%";
            document.getElementById("headlinePopulation2050").innerHTML = populationITAFuture + "Mio";
            //document.appendChild("wrapper.active");
            //document.getElementById("chart"). = (100*populationEU) / populationITA;  
        });
        var selectorSPA = document.getElementById("spain");
        selectorSPA.addEventListener("click", function () {
            document.getElementById("headlinePopulation2021").innerHTML = populationSPA + "Mio";
            document.getElementById("headlineRelativePopulation").innerHTML = (populationSPA * 100 / populationEU).toFixed(2) + "%";
            document.getElementById("headlineGrowthRate").innerHTML = ((populationSPAFuture - populationSPA) / populationSPA * 100).toFixed(2) + "%";
            document.getElementById("headlinePopulation2050").innerHTML = populationSPAFuture + "Mio";
            //document.getElementsByClassName("wrapper.active").;
            //document.getElementById("chart"). = (100*populationEU) / populationSPA;
        });
    });
    //function totalPopulation2(country : string, population : number, populationFuture : number) {
    //console.log(population + "Mio");
    //};
    //totalPopulation2("Deutschland", 83.16, 82.67);
    //totalPopulation2("Frankreich", 67.44, 70.01);
    //totalPopulation2("Italien", 59.26, 58.13);
    //totalPopulation2("Spanien", 47.39, 49.35);
    //function relativeEU2(country : string, population : number, populationFuture : number) {
    //console.log(population * 100 / populationEU  + "%.");
    //};
    //relativeEU2("Deutschland", 83.16, 82.67);
    //relativeEU2("Frankreich", 67.44, 70.01);
    //relativeEU2("Italien", 59.26, 58.13);
    //relativeEU2("Spanien", 47.39, 49.35);
    //function growthRate2(country : string, population : number, populationFuture : number) {
    //console.log((populationFuture - population) / population *100 + "%");
    //};
    //growthRate2("Deutschland", 83.16, 82.67);
    //growthRate2("Frankreich", 67.44, 70.01);
    //growthRate2("Italien", 59.26, 58.13);
    //growthRate2("Spanien", 47.39, 49.35);
    //function populationCountryFuture2(country : string, population : number, populationFuture : number) {
    //console.log(populationFuture + "Mio");
    //};
    //populationCountryFuture2("Deutschland", 83.16, 82.67);
    //populationCountryFuture2("Frankreich", 67.44, 70.01);
    //populationCountryFuture2("Italien", 59.26, 58.13);
    //populationCountryFuture2("Spanien", 47.39, 49.35);
    //" Bis zum Jahre 2050 wird sich die Bevölkerung um " + (populationFuture - population) / population *100 + "% verändern."+ "Bevölkerung im Jahre 2050 " + populationFuture + "Mio"
    //})
})(L07 || (L07 = {}));
//# sourceMappingURL=script.js.map