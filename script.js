document.addEventListener("DOMContentLoaded", () => {
    const wishBtn = document.getElementById("wish-btn");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("close-btn");

    // Show Popup
    wishBtn.addEventListener("click", () => {
        popup.classList.remove("hidden");
    });

    // Close Popup
    closeBtn.addEventListener("click", () => {
        popup.classList.add("hidden");
    });
});
