const video = document.querySelector("#academyVideo");
const videoContainer = video.parentElement;
const videoIcon = document.querySelector("#videoIcon");
const videoIconElement = document.querySelector("#videoIconElement");
const videoPoster = document.querySelector("#videoPoster");
const currentYear = document.querySelector("#current-year");

//Play & Pause
videoContainer.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        videoPoster.classList.add("opacity-0", "pointer-events-none");
        videoIconElement.classList.replace("fa-circle-play", "fa-circle-pause");
        videoIcon.classList.add("opacity-0");
    } else {
        video.pause();
        videoPoster.classList.remove("opacity-0", "pointer-events-none");
        videoIconElement.classList.replace("fa-circle-pause", "fa-circle-play");
        videoIcon.classList.remove("opacity-0");
    }
});

//Hover
videoContainer.addEventListener("mouseenter", () => {
    if (!video.paused) {
        videoIcon.classList.remove("opacity-0");
    }
});

videoContainer.addEventListener("mouseleave", () => {
    if (!video.paused) {
        videoIcon.classList.add("opacity-0");
    }
});

//Footer Copyright
currentYear.textContent = new Date().getFullYear();
