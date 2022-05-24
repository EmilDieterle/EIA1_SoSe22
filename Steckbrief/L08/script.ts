window.addEventListener("load", function() {

    function playSample(audio: string){     
        var sound: HTMLAudioElement = new Audio(audio);
        sound.play();
    }

document.querySelector("btn1").addEventListener('click', function(){playSample("assets/L08_task_material_assets_DrumPad_snare.mp3")});

document.querySelector("btn2").addEventListener('click', function(){playSample("assets/L08_task_material_assets_DrumPad_kick.mp3")});

document.querySelector("btn3").addEventListener('click', function(){playSample("assets/L08_task_material_assets_DrumPad_hihat.mp3")});

document.querySelector("btn4").addEventListener('click', function(){playSample("assets/L08_task_material_assets_DrumPad_A.mp3")});

document.querySelector("btn5").addEventListener('click', function(){playSample("assets/L08_task_material_assets_DrumPad_C.mp3")});

document.querySelector("btn6").addEventListener('click', function(){playSample("assets/L08_task_material_assets_DrumPad_F.mp3")});

document.querySelector("btn7").addEventListener('click', function(){playSample("assets/L08_task_material_assets_DrumPad_G.mp3")});

document.querySelector("btn8").addEventListener('click', function(){playSample("assets/L08_task_material_assets_DrumPad_laugh-1.mp3")});

document.querySelector("btn9").addEventListener('click', function(){playSample("assets/L08_task_material_assets_DrumPad_laugh-2.mp3")});

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