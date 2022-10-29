
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const input = document.getElementById("input")

plus.addEventListener("click", () => {
    input.value = parseInt(input.value) + 1;
})

minus.addEventListener("click", () => {
    input.value = parseInt(input.value) - 1;
})