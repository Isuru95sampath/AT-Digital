document.addEventListener("DOMContentLoaded", function () {

    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
        const toggle = faq.querySelector(".faqToggle");
        const answer = faq.querySelector(".faqAnswer");

        toggle.addEventListener("click", function () {
            if (answer.classList.contains("active")) {
                // Hide the paragraph and change button to "+"

                answer.classList.remove("active");
                toggle.textContent = "+";
            } else {
                // Show the paragraph and change button to "-"

                answer.classList.add("active");
                toggle.textContent = "−";
            }
        });
    });
});

// Toggle Menu 

function toggleMenu() {
    const menu = document.getElementById("menu");

    // Toggle the "active" class to show/hide menu

    menu.classList.toggle("active");
}







