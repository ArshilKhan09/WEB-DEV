const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("focus", () => {
    searchInput.parentElement.style.boxShadow =
        "0 0 10px rgba(239, 79, 95, 0.6)";
});

searchInput.addEventListener("blur", () => {
    searchInput.parentElement.style.boxShadow = "none";
});

searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const value = searchInput.value.trim();

        if (value === "") {
            alert("Please enter something to search");
        } else {
            alert("Searching for: " + value);
        }
    }
});
