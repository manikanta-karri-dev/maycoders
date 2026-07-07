const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const item = button.parentElement;

        document.querySelectorAll(".accordion-item").forEach(acc => {
            if(acc !== item){
                acc.classList.remove("active");
            }
        });

        item.classList.toggle("active");

    });
});