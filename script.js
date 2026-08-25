const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

yesBtn.addEventListener("click", () => {
    message.textContent = "I knew you loved me! ❤️🥰";

    yesBtn.textContent = "I Love You Too ❤️";
});

function moveNoButton() {
    const edgeMargin = 20;
    const maxX = Math.max(edgeMargin, window.innerWidth - noBtn.offsetWidth - edgeMargin);
    const maxY = Math.max(edgeMargin, window.innerHeight - noBtn.offsetHeight - edgeMargin);

    noBtn.style.position = "fixed";
    noBtn.style.left = `${edgeMargin + Math.random() * (maxX - edgeMargin)}px`;
    noBtn.style.top = `${edgeMargin + Math.random() * (maxY - edgeMargin)}px`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch") {
        event.preventDefault();
        moveNoButton();
    }
});