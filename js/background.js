document.addEventListener("DOMContentLoaded", () => {
    const background = document.getElementById("background");

    function createBubble() {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        const size = Math.random() * 10 + 5 + "px";
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = Math.random() * 100 + "%";
        bubble.style.animationDuration = Math.random() * 3 + 2 + "s";
        bubble.style.opacity = Math.random();

        background.appendChild(bubble);

        bubble.addEventListener("animationend", () => {
            bubble.remove();
        });
    }

    setInterval(createBubble, 150);
});
