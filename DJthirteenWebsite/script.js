document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "styles.css"; 
        document.head.appendChild(link);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.endsWith("pricing.html") || window.location.pathname === "/") {
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "styles.css"; 
        document.head.appendChild(link);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.endsWith("socials.html") || window.location.pathname === "/") {
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "styles.css"; 
        document.head.appendChild(link);
    }
});

const button = document.querySelector(".toggleButton img");
const boxes = document.querySelectorAll(".box");

let isPlaying = true; 

button.addEventListener("click", () => {
    isPlaying = !isPlaying;
    
    boxes.forEach(box => {
        box.style.animationPlayState = isPlaying ? "running" : "paused";
    });

    // Toggle between play and pause images
    button.src = isPlaying ? "PauseButton.png" : "PlayButton.png";
});

