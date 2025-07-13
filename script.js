document.addEventListener("DOMContentLoaded", () => {
    console.log("Dashboard Loaded");

    // Optional: Add interactivity here
    const downloadBtn = document.querySelector(".btn");
    downloadBtn.addEventListener("mouseover", () => {
        downloadBtn.style.transform = "scale(1.05)";
    });
    downloadBtn.addEventListener("mouseout", () => {
        downloadBtn.style.transform = "scale(1)";
    });
});
