window.addEventListener("load", function() {

    var colors: string[] = ["rgb(1,88,224)", "#ff0088", "yellow", "rgba(0,0,100,0.5)"];

    var activeIndex : number = 0;
    document.querySelector("#button").addEventListener("click", function() {

        document.querySelector("body").style.backgroundColor = colors[activeIndex];
        
        activeIndex = activeIndex + 1;


        })
    })