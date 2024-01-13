const form = document.querySelector("form");
const passwordInput = document.querySelector("input[name='password']");

form.addEventListener("submit", (e) => {
    const password = passwordInput.value;
    const confPassword = document.querySelector("input[name='con-password']").value;

    if (password !== confPassword) {
        document.querySelector("label[for='password']").classList.add("error");
        e.preventDefault();
    }
})