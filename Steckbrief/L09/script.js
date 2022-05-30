window.addEventListener("load", function () {
    function playSample(audio) {
        var sound = new Audio(audio);
        sound.play();
    }
    document.querySelector(".btn1").addEventListener("click", function () { playSample("assets/L08_task_material_assets_DrumPad_snare.mp3"); });
    document.querySelector(".btn2").addEventListener("click", function () { playSample("assets/L08_task_material_assets_DrumPad_kick.mp3"); });
    document.querySelector(".btn3").addEventListener("click", function () { playSample("assets/L08_task_material_assets_DrumPad_hihat.mp3"); });
    document.querySelector(".btn4").addEventListener("click", function () { playSample("assets/L08_task_material_assets_DrumPad_A.mp3"); });
    document.querySelector(".btn5").addEventListener("click", function () { playSample("assets/L08_task_material_assets_DrumPad_C.mp3"); });
    document.querySelector(".btn6").addEventListener("click", function () { playSample("assets/L08_task_material_assets_DrumPad_F.mp3"); });
    document.querySelector(".btn7").addEventListener("click", function () { playSample("assets/L08_task_material_assets_DrumPad_G.mp3"); });
    document.querySelector(".btn8").addEventListener("click", function () { playSample("assets/L08_task_material_assets_DrumPad_laugh-1.mp3"); });
    document.querySelector(".btn9").addEventListener("click", function () { playSample("assets/L08_task_material_assets_DrumPad_laugh-2.mp3"); });
    document.querySelector("#playButton").addEventListener("click", playButton);
    function playButton() {
        var beat = [new Audio("assets/L08_task_material_assets_DrumPad_kick.mp3"), new Audio("assets/L08_task_material_assets_DrumPad_snare.mp3"), new Audio("assets/L08_task_material_assets_DrumPad_hihat.mp3")];
        //var activeIndex: number = 0;
        //setInterval(function(): void {
        //beat[activeIndex].play();
        //activeIndex = activeIndex + 1;
        //},             500);
        //if (activeIndex == beat.length) {
        //activeIndex = 0;
        for (var activeIndex = 0; activeIndex <= beat.length; activeIndex++) {
            beat[activeIndex].play();
        }
        if (activeIndex == beat.length) {
            activeIndex = 0;
        }
        //console.log(beat[activeIndex]);
    }
});
//# sourceMappingURL=script.js.map