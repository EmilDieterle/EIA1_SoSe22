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
            document.querySelector("germany").setAttribute("class", "active");
            //document.getElementById("chart"). = (100*populationEU) / populationSPA;
        });

    });
}