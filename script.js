$(function () {
    $("#draggable").draggable({
        revert: true,
        axis: "x"
    });
});

const actionElement = document.querySelector(".action")

actionElement.addEventListener("touchmove", function (event) {
    moveCard(event)
})

const control = document.querySelector(".control")
const audioElement = new Audio('Music/9oclock.mp3')
const playbtn = document.querySelector("#play")
const pausebtn = document.querySelector("#pause")
let playing = false;

control.addEventListener("touchstart", function () {
    playMusic()
})

function playMusic() {

    if (playing) {

        playing = false;
        pauseAudio();
        playbtn.style.display = "block"
        pausebtn.style.display = "none"

    } else {

        playing = true;
        playAudio();
        playbtn.style.display = "none"
        pausebtn.style.display = "block"

    }

}

function playAudio() {
    audioElement.play();
}

function pauseAudio() {
    audioElement.pause();
}


function moveCard(e) {

    console.log(getOffset(actionElement))

}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      rect
    };
  }