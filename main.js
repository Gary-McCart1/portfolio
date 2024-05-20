let sec = 84608000;
var el = document.getElementById('seconds-counter');

function incrementSeconds() {
    seconds += 1;
    el.innerText = "I have been coding for " + seconds + " seconds.";
}
var cancel = setInterval(incrementSeconds, 1000);