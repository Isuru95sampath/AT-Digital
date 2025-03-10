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

// mobile menu

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector("nav ul");

    menuIcon.addEventListener("click", function () {
        menuIcon.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
});





