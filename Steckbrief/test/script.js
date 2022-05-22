window.addEventListener("load", function () {
    var colors = ["rgb(1,88,224)", "#ff0088", "yellow", "rgba(0,0,100,0.5)"];
    var activeIndex = 0;
    document.querySelector("#button").addEventListener("click", function () {
        document.querySelector("body").style.backgroundColor = colors[activeIndex];
        activeIndex = activeIndex + 1;
    });
});
//# sourceMappingURL=script.js.map