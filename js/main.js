const filterButtons = document.querySelectorAll(".filter-button");
const workCards = document.querySelectorAll(".work-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        filterButtons.forEach((btn) => {
            btn.classList.remove("is-active");
        });

        button.classList.add("is-active");

        workCards.forEach((card) => {
            const category = card.dataset.category;

            if (category === filter) {
                card.classList.remove("is-hidden");
            } else {
                card.classList.add("is-hidden");
            }
        });
        
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    
});

// URLパラメータからフィルター適用
const params = new URLSearchParams(window.location.search);
const initialFilter = params.get("filter");

if (initialFilter) {
    const targetButton = document.querySelector(
        `.filter-button[data-filter="${initialFilter}"]`
    );

    if (targetButton) {
        targetButton.click();
    }
}
