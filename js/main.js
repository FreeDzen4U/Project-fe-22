const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal")
const close = document.querySelector(".close")

cartButton.addEventListener("click", toggleMadal);

close.addEventListener("click", toggleMadal);

function toggleMadal() {
    modal.classList.remove("is-open")
}