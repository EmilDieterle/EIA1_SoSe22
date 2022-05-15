window.addEventListener("load", function () {
    function saySomething() {
        alert("der Daumen");
    }
    document.querySelector("#button1").addEventListener("click", saySomething);
    function buttonClicked() {
        document.querySelector("#result").innerHTML = "1";
    }
    document.querySelector("#button2").addEventListener("click", buttonClicked);
});
//# sourceMappingURL=script.js.map