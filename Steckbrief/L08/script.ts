window.addEventListener("load", function() {

document.querySelector(".btn1").addEventListener("click", playSample1);
function playSample1(){
    var sound3:HTMLAudioElement = new Audio('assets/L08_task_material_assets_DrumPad_snare.mp3');
sound3.play();
}

document.querySelector(".btn2").addEventListener("click", playSample2);
function playSample2(){
    var sound3:HTMLAudioElement = new Audio('assets/L08_task_material_assets_DrumPad_kick.mp3');
sound3.play();
}

document.querySelector(".btn3").addEventListener("click", playSample3);
function playSample3(){
    var sound3:HTMLAudioElement = new Audio('assets/L08_task_material_assets_DrumPad_hihat.mp3');
sound3.play();
}

document.querySelector(".btn4").addEventListener("click", playSample4);
function playSample4(){
    var sound3:HTMLAudioElement = new Audio('assets/L08_task_material_assets_DrumPad_A.mp3');
sound3.play();
}

document.querySelector(".btn5").addEventListener("click", playSample5);
function playSample5(){
    var sound3:HTMLAudioElement = new Audio('assets/L08_task_material_assets_DrumPad_C.mp3');
sound3.play();
}

document.querySelector(".btn6").addEventListener("click", playSample6);
function playSample6(){
    var sound3:HTMLAudioElement = new Audio('assets/L08_task_material_assets_DrumPad_F.mp3');
sound3.play();
}

document.querySelector(".btn7").addEventListener("click", playSample7);
function playSample7(){
    var sound3:HTMLAudioElement = new Audio('assets/L08_task_material_assets_DrumPad_G.mp3');
sound3.play();
}

document.querySelector(".btn8").addEventListener("click", playSample8);
function playSample8(){
    var sound3:HTMLAudioElement = new Audio('assets/L08_task_material_assets_DrumPad_laugh-1.mp3');
sound3.play();
}

document.querySelector(".btn9").addEventListener("click", playSample9);
function playSample9(){
    var sound3:HTMLAudioElement = new Audio('assets/L08_task_material_assets_DrumPad_laugh-2.mp3');
sound3.play();
}

document.querySelector("#playButton").addEventListener("click", playButton);
function playButton(){
    var beat: HTMLAudioElement[] = [new Audio('assets/L08_task_material_assets_DrumPad_kick.mp3'), new Audio('assets/L08_task_material_assets_DrumPad_snare.mp3'), new Audio('assets/L08_task_material_assets_DrumPad_hihat.mp3')];

setInterval(function() {
    beat[0].play();
    beat[1].play();
    beat[2].play();
 }, 500);

}

})



//document.querySelector("#playButton").addEventListener("click", playButton);
//function playButton(){
//}
//var btn1:HTMLButtonElement = document.getElementById("btn1")as HTMLButtonElement;

//var btn2:HTMLButtonElement = document.getElementById("btn2")as HTMLButtonElement;

//var btn3:HTMLButtonElement = document.getElementById("btn3")as HTMLButtonElement;

//var btn4:HTMLButtonElement = document.getElementById("btn4")as HTMLButtonElement;

//var btn5:HTMLButtonElement = document.getElementById("btn5")as HTMLButtonElement;

//var btn6:HTMLButtonElement = document.getElementById("btn6")as HTMLButtonElement;

//var btn7:HTMLButtonElement = document.getElementById("btn7")as HTMLButtonElement;

//var btn8:HTMLButtonElement = document.getElementById("btn8")as HTMLButtonElement;

//var btn9:HTMLButtonElement = document.getElementById("btn9")as HTMLButtonElement;

//var sound1:HTMLAudioElement = new Audio('assets/L08_task_material_assets_DrumPad_snare.mp3');
//sound1.play();
    
//var sound2:HTMLAudioElement = new Audio('assets/L08_task_material_assets_DrumPad_kick.mp3');
//sound2.play();
    
//var sound3:HTMLAudioElement = new Audio('assets/L08_task_material_assets_DrumPad_hihat.mp3');
//sound3.play();

//var sound4:HTMLAudioElement = new Audio('assets/L08_task_material_assets_DrumPad_A.mp3');
//sound4.play();

//var sound5:HTMLAudioElement = new Audio('assets/L08_task_material_assets_DrumPad_C.mp3');
//sound5.play();

//var sound6:HTMLAudioElement = new Audio('assets/L08_task_material_assets_DrumPad_F.mp3');
//sound6.play();

//var sound7:HTMLAudioElement = new Audio('assets/L08_task_material_assets_DrumPad_G.mp3');
//sound7.play();

//var sound8:HTMLAudioElement = new Audio('assets/L08_task_material_assets_DrumPad_laugh-1.mp3');
//sound8.play();

//var sound9:HTMLAudioElement = new Audio('assets/L08_task_material_assets_DrumPad_laugh-2.mp3');
//sound9.play();
//var playSample1:HTMLButtonElement = document.getElementById("btn1")as HTMLButtonElement;
//playSample1.addEventListener("click", function():void{
    //sound1.play();
//})

//var playSample2:HTMLButtonElement = document.getElementById("btn2")as HTMLButtonElement;
//playSample2.addEventListener("click", function():void{
    //sound2.play();
//})

//function playSample(btn:HTMLButtonElement, sound:HTMLAudioElement) {
//sound.play()

//}

//playSample.addEventlistener("click",btn, function() {
//playSample(btn3, sound3.play())
//function playSample(btn:HTMLButtonElement, sound:HTMLAudioElement) {
//playSample.addEventlistener("click",btn, function() {
//sound.play()
//playSample(btn3, sound3)
//}
//})
//var playSample1:HTMLButtonElement = document.getElementById("btn1")as unknown as HTMLButtonElement;
//sound1.play();
//}
//})
//var playSample: HTMLElement = document.getElementById("btn1") as unknown as HTMLElement;
        //var playSample;
        //function playSample(sound: HTMLAudioElement){
        //playSample.addEventListener("click", function(): void{
            //sound.play();
       //.addEventListener("click", function(): void{
            //document.querySelector("#btn1").addEventListener("click", function()
            //sound1.play();
        //})
        //})