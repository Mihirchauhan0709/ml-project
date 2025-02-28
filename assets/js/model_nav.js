document.addEventListener("DOMContentLoaded", function () {
    const modelLinks = document.querySelectorAll(".model-link");
    const modelSections = document.querySelectorAll(".model-section");

    modelLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Remove 'active' class from all links
            modelLinks.forEach(item => item.classList.remove("active"));

            // Add 'active' class to clicked link
            this.classList.add("active");

            // Hide all sections
            modelSections.forEach(section => section.style.display = "none");

            // Show the selected section
            const targetSection = document.getElementById(this.getAttribute("data-target"));
            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });

    // Ensure only the first section is visible by default
    document.querySelector(".model-section").style.display = "block";
});
