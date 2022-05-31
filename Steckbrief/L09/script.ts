window.addEventListener("load", function (): void {

    function playSample(audio: string): void {     
        var sound: HTMLAudioElement = new Audio(audio);
        sound.play();
    }

    document.querySelector(".btn1").addEventListener("click", function(): void {playSample("assets/L08_task_material_assets_DrumPad_snare.mp3"); });

    document.querySelector(".btn2").addEventListener("click", function(): void {playSample("assets/L08_task_material_assets_DrumPad_kick.mp3"); });

    document.querySelector(".btn3").addEventListener("click", function(): void {playSample("assets/L08_task_material_assets_DrumPad_hihat.mp3"); });

    document.querySelector(".btn4").addEventListener("click", function(): void {playSample("assets/L08_task_material_assets_DrumPad_A.mp3"); });

    document.querySelector(".btn5").addEventListener("click", function(): void {playSample("assets/L08_task_material_assets_DrumPad_C.mp3"); });

    document.querySelector(".btn6").addEventListener("click", function(): void {playSample("assets/L08_task_material_assets_DrumPad_F.mp3"); });

    document.querySelector(".btn7").addEventListener("click", function(): void {playSample("assets/L08_task_material_assets_DrumPad_G.mp3"); });

    document.querySelector(".btn8").addEventListener("click", function(): void {playSample("assets/L08_task_material_assets_DrumPad_laugh-1.mp3"); });

    document.querySelector(".btn9").addEventListener("click", function(): void {playSample("assets/L08_task_material_assets_DrumPad_laugh-2.mp3"); });

    
        //document.querySelector("#play").classList.add("fa-play");
        //document.querySelector("#play").classList.remove("fa-pause");

    document.querySelector(".fa-play").addEventListener("click", playButton);
    function playButton(): void {
    var beat: HTMLAudioElement[] = [
       new Audio("assets/L08_task_material_assets_DrumPad_kick.mp3"), 
       new Audio("assets/L08_task_material_assets_DrumPad_snare.mp3"), 
       new Audio("assets/L08_task_material_assets_DrumPad_hihat.mp3")
    ];

    var activeIndex: number = 0;
    //var intervalID;

    var intervallID = setInterval(function(): void {
    var beatAktuell = beat[activeIndex];
    playSample(beatAktuell);
    activeIndex = activeIndex + 1;
    if (activeIndex == beat.length) {
        activeIndex = 0;
    }
 },             500);

    function stop(): void {
        clearInterval(intervalID);
}

    document.getElementById("#playButton").addEventListener("click", stop);

    document.querySelector(".fa-music").addEventListener("click", playRemix);
    function playRemix(): void {
    var beat: HTMLAudioElement[] = [
        new Audio("assets/L08_task_material_assets_DrumPad_kick.mp3"), 
        new Audio("assets/L08_task_material_assets_DrumPad_snare.mp3"), 
        new Audio("assets/L08_task_material_assets_DrumPad_hihat.mp3"),
        new Audio("assets/L08_task_material_assets_DrumPad_A.mp3"),
        new Audio("assets/L08_task_material_assets_DrumPad_C.mp3"),
        new Audio("assets/L08_task_material_assets_DrumPad_F.mp3"),
        new Audio("assets/L08_task_material_assets_DrumPad_G.mp3"),
        new Audio("assets/L08_task_material_assets_DrumPad_laugh-1.mp3"),
        new Audio("assets/L08_task_material_assets_DrumPad_laugh-2.mp3")
    ];

    var activeIndex: number;
    setInterval(function(): void {
    beat[Math.round(Math.random() * 9)].play();
    activeIndex = activeIndex + 1;
    if (activeIndex == beat.length) {
        activeIndex = 0;
    }
 },             500);

}

    //document.getElementById("#pause").style.display = "none";
    //document.getElementById("#play").style.display = "block";
        
}

    document.querySelector(".fa-play").addEventListener("click", buttonAenderung);
    function buttonAenderung(): void {
        document.querySelector("#play").setAttribute("class", "fas fa-pause");
        document.querySelector("#play").classList.remove("fa-play");

        if (document.querySelector("#play").getAttribute("class") == "fas fa-pause") {
            document.querySelector("#play").setAttribute("class", "fas fa-pause");
        }

    }
//function playButton(): void {
  //  var beat: HTMLAudioElement[] = [
   // "assets/L08_task_material_assets_DrumPad_kick.mp3",
  //  "assets/L08_task_material_assets_DrumPad_snare.mp3",
   // "assets/L08_task_material_assets_DrumPad_hihat.mp3",
   // ];
   // var activeIndex: number = 0;
    
   // setInterval(function(): void {
   // var beatAktuell = beat[activeIndex];
    //playSample(beatAktuell);
  //  activeIndex = activeIndex + 1;
  //  }, 500);

  //Math.random() // erzeugt eine (quasi) Zufallszahl 
    //Math.round()  eine einfache Art um eine Gleitkommazahl zu einer Ganzzahl zu runden

} );