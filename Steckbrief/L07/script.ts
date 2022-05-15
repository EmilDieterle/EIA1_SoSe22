namespace L07 {

    window.addEventListener("load", function() {

        var populationEU = 447.01;

        var countryGER : string = "Deutschland";
        var populationGER : number = 83.16;
        var populationGERFuture : number = 82.67;        

        var countryFRA : string = "Frankreich";
        var populationFRA : number = 67.44;
        var populationFRAFuture : number = 70.01;

        var countryITA : string = "Italien";
        var populationITA : number = 59.26;
        var populationITAFuture : number = 58.13;

        var countrySPA : string = "Spanien";
        var populationSPA : number = 47.39;
        var populationSPAFuture : number = 49.35;

        var selectorGER: HTMLImageElement = document.getElementById("germany") as unknown as HTMLImageElement;
        selectorGER.addEventListener("click", function(): void{
            document.getElementById("headlinePopulation2021").innerHTML = populationGER + "Mio";
            document.getElementById("headlineRelativePopulation").innerHTML = (populationGER * 100 / populationEU).toFixed(2)  + "%";
            document.getElementById("headlineGrowthRate").innerHTML = ((populationGERFuture - populationGER) / populationGER *100).toFixed(2) + "%";
            document.getElementById("headlinePopulation2050").innerHTML = populationGERFuture + "Mio";
            //document.getElementsByClassName("wrapper.active").;
            //document.getElementById("chart"). = (100*populationEU) / populationGER;
        });

        var selectorFRA: HTMLImageElement = document.getElementById("france") as unknown as HTMLImageElement;
        selectorFRA.addEventListener("click", function(): void{
            document.getElementById("headlinePopulation2021").innerHTML = populationFRA + "Mio";
            document.getElementById("headlineRelativePopulation").innerHTML = (populationFRA * 100 / populationEU).toFixed(2)  + "%";
            document.getElementById("headlineGrowthRate").innerHTML = ((populationFRAFuture - populationFRA) / populationFRA *100).toFixed(2) + "%";
            document.getElementById("headlinePopulation2050").innerHTML = populationFRAFuture + "Mio";
            //document.getElementsByClassName("wrapper.active").;
            //document.getElementById("chart"). = (100*populationEU) / populationFRA;
        });

        var selectorITA: HTMLImageElement = document.getElementById("italy") as unknown as HTMLImageElement;
        selectorITA.addEventListener("click", function(): void{
            document.getElementById("headlinePopulation2021").innerHTML = populationITA + "Mio";
            document.getElementById("headlineRelativePopulation").innerHTML = (populationITA * 100 / populationEU).toFixed(2)  + "%";
            document.getElementById("headlineGrowthRate").innerHTML = ((populationITAFuture - populationITA) / populationITA *100).toFixed(2) + "%";
            document.getElementById("headlinePopulation2050").innerHTML = populationITAFuture + "Mio";
            //document.appendChild("wrapper.active");
            //document.getElementById("chart"). = (100*populationEU) / populationITA;  
        });

        var selectorSPA: HTMLImageElement = document.getElementById("spain") as unknown as HTMLImageElement;
        selectorSPA.addEventListener("click", function(): void{
            document.getElementById("headlinePopulation2021").innerHTML = populationSPA + "Mio";
            document.getElementById("headlineRelativePopulation").innerHTML = (populationSPA * 100 / populationEU).toFixed(2)  + "%";
            document.getElementById("headlineGrowthRate").innerHTML = ((populationSPAFuture - populationSPA) / populationSPA *100).toFixed(2) + "%";
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

}