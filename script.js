$(function () {
    $("#draggable").draggable({
        revert: true,
        axis: "x"
    });
});

const control = document.querySelector(".control")
const audioElement = document.querySelector("audio")
const playbtn = document.querySelector("#play")
const pausebtn = document.querySelector("#pause")
let playing = false;

const playMusic = () => {
    
    if (!playing) {
        audioElement.play()
        playbtn.style.display = "none"
        pausebtn.style.display = "block"
    }else{
        audioElement.pause();
        audioElement.currentTime = 0;
        playbtn.style.display = "block"
        pausebtn.style.display = "none"
    }

    playing = !playing
    
}

control.addEventListener("touchstart", playMusic)
