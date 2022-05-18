namespace L07 {

    window.addEventListener("load", function() {

        var union : string = "EU";
        var populationEU : number = 447.01;
        var populationEUFuture : number = 441.22;

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

        var selectorEU: HTMLImageElement = document.getElementById("EU") as unknown as HTMLImageElement;
        selectorEU.addEventListener("click", function(): void{

            document.getElementById("headlinePopulation2021").innerHTML = populationEU + "Mio";
            document.getElementById("headlineRelativePopulation").innerHTML = (populationEU * 100 / populationEU).toFixed(2)  + "%";
            document.getElementById("headlineGrowthRate").innerHTML = ((populationEUFuture - populationEU) / populationEU *100).toFixed(2) + "%";
            document.getElementById("headlinePopulation2050").innerHTML = populationEUFuture + "Mio";

            document.querySelector("#ger").setAttribute("class", "wrapper");
            document.querySelector("#fra").setAttribute("class", "wrapper");
            document.querySelector("#ita").setAttribute("class", "wrapper");
            document.querySelector("#spa").setAttribute("class", "wrapper");

            document.querySelector("#chart").setAttribute("style" , "height: 100%");
        });



        var selectorGER: HTMLImageElement = document.getElementById("germany") as unknown as HTMLImageElement;
        selectorGER.addEventListener("click", function(): void{

            document.getElementById("headlinePopulation2021").innerHTML = populationGER + "Mio";
            document.getElementById("headlineRelativePopulation").innerHTML = (populationGER * 100 / populationEU).toFixed(2)  + "%";
            document.getElementById("headlineGrowthRate").innerHTML = ((populationGERFuture - populationGER) / populationGER *100).toFixed(2) + "%";
            document.getElementById("headlinePopulation2050").innerHTML = populationGERFuture + "Mio";

            document.querySelector("#ger").setAttribute("class", "wrapper active");
            document.querySelector("#fra").setAttribute("class", "wrapper");
            document.querySelector("#ita").setAttribute("class", "wrapper");
            document.querySelector("#spa").setAttribute("class", "wrapper");

            var percentage = (populationGER/populationEU) *100;
            document.querySelector("#chart").setAttribute("style" , "height:" + percentage + "%");
        });

        var selectorFRA: HTMLImageElement = document.getElementById("france") as unknown as HTMLImageElement;
        selectorFRA.addEventListener("click", function(): void{

            document.getElementById("headlinePopulation2021").innerHTML = populationFRA + "Mio";
            document.getElementById("headlineRelativePopulation").innerHTML = (populationFRA * 100 / populationEU).toFixed(2)  + "%";
            document.getElementById("headlineGrowthRate").innerHTML = ((populationFRAFuture - populationFRA) / populationFRA *100).toFixed(2) + "%";
            document.getElementById("headlinePopulation2050").innerHTML = populationFRAFuture + "Mio";

            document.querySelector("#fra").setAttribute("class", "wrapper active");
            document.querySelector("#ger").setAttribute("class", "wrapper");
            document.querySelector("#ita").setAttribute("class", "wrapper");
            document.querySelector("#spa").setAttribute("class", "wrapper");

            var percentage = (populationFRA/populationEU) *100;
            document.querySelector("#chart").setAttribute("style" , "height:" + percentage + "%");
        });

        var selectorITA: HTMLImageElement = document.getElementById("italy") as unknown as HTMLImageElement;
        selectorITA.addEventListener("click", function(): void{

            document.getElementById("headlinePopulation2021").innerHTML = populationITA + "Mio";
            document.getElementById("headlineRelativePopulation").innerHTML = (populationITA * 100 / populationEU).toFixed(2)  + "%";
            document.getElementById("headlineGrowthRate").innerHTML = ((populationITAFuture - populationITA) / populationITA *100).toFixed(2) + "%";
            document.getElementById("headlinePopulation2050").innerHTML = populationITAFuture + "Mio";

            document.querySelector("#ita").setAttribute("class", "wrapper active")
            document.querySelector("#ger").setAttribute("class", "wrapper");
            document.querySelector("#fra").setAttribute("class", "wrapper");
            document.querySelector("#spa").setAttribute("class", "wrapper");

            var percentage = (populationITA/populationEU) *100;
            document.querySelector("#chart").setAttribute("style" , "height:" + percentage + "%");
        });

        var selectorSPA: HTMLImageElement = document.getElementById("spain") as unknown as HTMLImageElement;
        selectorSPA.addEventListener("click", function(): void{
            
            document.getElementById("headlinePopulation2021").innerHTML = populationSPA + "Mio";
            document.getElementById("headlineRelativePopulation").innerHTML = (populationSPA * 100 / populationEU).toFixed(2)  + "%";
            document.getElementById("headlineGrowthRate").innerHTML = ((populationSPAFuture - populationSPA) / populationSPA *100).toFixed(2) + "%";
            document.getElementById("headlinePopulation2050").innerHTML = populationSPAFuture + "Mio";

            document.querySelector("#spa").setAttribute("class", "wrapper active");
            document.querySelector("#ger").setAttribute("class", "wrapper");
            document.querySelector("#fra").setAttribute("class", "wrapper");
            document.querySelector("#ita").setAttribute("class", "wrapper");

            var percentage = (populationSPA/populationEU) *100;
            document.querySelector("#chart").setAttribute("style" , "height:" + percentage + "%");
        });

    });
}