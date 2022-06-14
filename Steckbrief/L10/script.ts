let addTask = document.getElementById("addTask");
let listContainer = document.getElementById("listContainer");
let inputField = document.getElementById("inputField");
var i = 0;

addTask.addEventListener("click", function() {

    var trash = document.createElement("i");
    trash.classList.add("fa-regular", "fa-trash-can");

    var list = document.createElement("p");
    list.classList.add("listStyle");
    list.innerText = inputField.value;
    listContainer.appendChild(list);
    inputField.value = "";

    var circleChecked = document.createElement("i");
    circleChecked.classList.add("hidden");
    console.log(circleChecked);
    var circle = document.createElement("i");
    circle.classList.add("fa-regular", "fa-circle");
    circle.addEventListener("click", function() {
        circle.classList.remove("fa-regular", "fa-circle");
        circle.classList.add("fa-regular", "fa-circle-check");

        //circle.addEventListener("click", function() {
            //circle.classList.remove("fa-regular", "fa-circle");
            //circle.classList.add("fa-regular", "fa-circle-check");

        //if (circle.getAttribute("fa-circle-check")) {
            //circle.classList.remove("fa-regular", "fa-circle-check");
            //circle.classList.add("fa-regular", "fa-circle");
            //circleChecked.classList.remove("hidden");
            //circleChecked.classList.add("fa-regular", "fa-circle");
            //console.log("sds");
        //}
    });
    //circle.addEventListener("click", function() {
        //circle.classList.remove("fa-regular", "fa-circle-check");
        //circle.classList.add("fa-regular", "fa-circle");

        var listItem = document.createElement("div");
        listItem.classList.add("listStyle");
        listItem.appendChild(trash);
        listItem.appendChild(list);
        listItem.appendChild(circle);

        listContainer.appendChild(listItem);
        i++;
        document.getElementById("tasksInTotal").innerHTML = i + " tasks in total";


        trash.addEventListener("click", function() {
        i--;
        listContainer.removeChild(listItem);
        document.getElementById("tasksInTotal").innerHTML = i + " tasks in total";
    });
}); 

    //document.querySelector("fa-regular fa-circle").addEventListener("click", kreisAnkreuzen);
    //function kreisAnkreuzen(): void {
     //document.querySelector("fa-regular fa-circle").classList.add("hidden");
     //document.querySelector("fa-regular fa-circle-check").classList.remove("hidden");
     //console.log(kreisAnkreuzen);
    //}

    //document.querySelector("fa-regular fa-circle-check").addEventListener("click", kreisNichtAnkreuzen);
    //function kreisNichtAnkreuzen(): void {
         //document.querySelector("fa-regular fa-circle-check").classList.add("hidden");
         //document.querySelector("fa-regular fa-circle").classList.remove("hidden");
        //}