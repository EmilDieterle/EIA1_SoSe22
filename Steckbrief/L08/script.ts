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