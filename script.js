$(function () {
    $("#draggable").draggable({
        revert: true,
        axis: "x"
    });
});

const control = document.querySelector(".control")
const audioElement = new Audio('Music/9oclock.mp3');
const playbtn = document.querySelector("#play")
const pausebtn = document.querySelector("#pause")
control.addEventListener("touchstart", function() {
    playMusic()
})


let playing = false;

function playMusic() {

    if (audioElement.paused) {
        audioElement.play();
        playbtn.style.display = "none"
        pausebtn.style.display = "block"
    }else{
        audioElement.pause();
        audioElement.currentTime = 0
        playbtn.style.display = "block"
        pausebtn.style.display = "none"
    }

    playing = !playing
    
}


