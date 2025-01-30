let main = document.getElementsByClassName("panel"); // HTMLCollection

// Loop through each element in the collection
for (let i = 0; i < main.length; i++) {
    main[i].addEventListener("click", function() {
        // If this element is already active, remove it. Otherwise, add it.
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            // Remove "active" from all elements first
            for (let j = 0; j < main.length; j++) {
                main[j].classList.remove("active");
            }
            // Add "active" class to the clicked element
            this.classList.add("active");
        }
    });
}
