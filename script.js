$(function () {
    $("#draggable").draggable({
        revert: true,
        axis: "x"
    });
});

const control = document.querySelector(".control")
const audioElement = document.querySelector("audio")
let playing = false;


const playMusic = () => {
    
    if (!playing) {
        audioElement.play()
    }else{
        audioElement.pause();
        audioElement.currentTime = 0;
    }

    playing = !playing
    
}

control.addEventListener("touchstart", playMusic)
