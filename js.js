var play = document.getElementsByClassName('playpause')[0];
var v = document.getElementsByClassName('simple_videoBox')[0].getElementsByTagName('video')[0];
var bar = document.getElementsByClassName('progressBar')[0];
play.addEventListener('click', () => {
    if (play.classList != "playpause play") {
        play.classList = "playpause play";
        v.play();
    }
    else {
        play.classList = "playpause";
        v.pause();
    }
})
bar.oninput = () => {
    v.currentTime = (v.duration / 1000) * bar.value;
}
v.ontimeupdate = () => {
    bar.value = v.currentTime / (v.duration / 1000)
}