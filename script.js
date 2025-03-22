window.onload = function () {
    const box = document.getElementById("lightbox");
    const imgDisplay = document.getElementById("lightbox-img");
    const allThumbs = document.querySelectorAll(".thumbnail");
    const xButton = document.getElementById("close-btn");

    for (let thumb of allThumbs) {
        thumb.addEventListener("click", function () {
            imgDisplay.src = thumb.getAttribute("data-full");
            box.classList.add("show");
        });
    }

    xButton.addEventListener("click", function () {
        box.classList.remove("show");
    });

    box.addEventListener("click", function (e) {
        if (e.target === box) box.classList.remove("show");
    });
};