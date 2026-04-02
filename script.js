const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", (event) => {
        const ripple = document.createElement("span");
        ripple.className = "button-ripple";

        const rect = button.getBoundingClientRect();
        ripple.style.left = `${event.clientX - rect.left}px`;
        ripple.style.top = `${event.clientY - rect.top}px`;

        button.appendChild(ripple);
        ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
    });
});

const benefitItems = document.querySelectorAll(".benefit-item");

benefitItems.forEach((item) => {
    item.addEventListener("toggle", () => {
        if (!item.open) {
            return;
        }

        benefitItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.open = false;
            }
        });
    });
});
