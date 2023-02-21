window.addEventListener("DOMContentLoaded", () => {

    let container = document.getElementById("container");

    let email;
    let password;
    let weight;
    let weight_units;
    let name;
    let starting_page = document.getElementById("starting-page");
    let details_page = document.getElementById("details-page");

    let signup_button = document.getElementById("signup");
    signup_button.addEventListener("click", (e) => {
        let email_input = document.getElementById("email");
        let password_input = document.getElementById("password");

        if (document.getElementById("signup-form").checkValidity()) {
            e.preventDefault();
            email = email_input.value;
            password = password_input.value;
            starting_page.classList.toggle("hidden");
            details_page.classList.toggle("hidden");
        }
    })

    let next_button = document.getElementById("next");
    next_button.addEventListener("click", (e) => {
        if (document.getElementById("details-form").checkValidity()) {
            e.preventDefault();
            name = document.getElementById("name").value;
            weight = document.getElementById("weight").value;
            weight_units = document.querySelector('input[name="weight-measurement"]:checked').value;
            let goals_page = document.getElementById("goals-page");
            details_page.classList.toggle("hidden");
            goals_page.classList.toggle("hidden");
        }
    })

    let back1_button = document.getElementById("back1");
    back1_button.addEventListener("click", go_back.bind(null, "starting-page", "details-page"));

    function go_back(prev, curr, e) {
        e.preventDefault();
        document.getElementById(prev).classList.toggle("hidden");
        document.getElementById(curr).classList.toggle("hidden");
    }
})