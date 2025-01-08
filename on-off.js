const Powerbtn = document.getElementById("switchBtn");
const display = document.getElementById("displayed");
const dots = document.getElementsByClassName("dot"); 

Powerbtn.addEventListener("click", () => {
    const currentBgColor = getComputedStyle(display).backgroundColor;

    if (currentBgColor === "rgb(0, 0, 0)") {

        display.style.backgroundColor = "transparent";
        Powerbtn.textContent = "ON";
        Powerbtn.style.backgroundColor = "green";

    Array.from(dots).forEach((dot) => {
        dot.classList.remove("hidden");
        dot.classList.add("visible");
        });
    } else {

        display.style.backgroundColor = "rgb(0, 0, 0)";
        Powerbtn.textContent = "OFF";
        Powerbtn.style.backgroundColor = "red";

    Array.from(dots).forEach((dot) => {
        dot.classList.remove("visible");
        dot.classList.add("hidden");
        });
    }
});
