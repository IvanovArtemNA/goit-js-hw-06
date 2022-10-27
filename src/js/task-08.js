const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", buttonSubmit);

function buttonSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Будь ласка, заповніть всі поля");
  } else {
    const formValue = {
      Email: email.value,
      Password: password.value,
    };

    console.log(formValue);
  }
  event.currentTarget.reset();
}
