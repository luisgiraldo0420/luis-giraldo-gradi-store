function minicartHiddenShow() {
    window.scroll(0, 0);
    let x = document.getElementById("minicartHiddenShow");
    let y = document.getElementById("container_content");

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.opacity = 0.5;
        y.style.pointerEvents = "none";
    } else {
        x.style.display = "none";
        y.style.opacity = 1;
        y.style.pointerEvents = "all";
    }
}