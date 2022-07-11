const form = document.querySelector('.login-form');

function onLoginForm(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === '' || password === '') {
        alert('Пусто')
        form.reset();
        return
    }

    const formData = {
        email: email,
        password: password
    }
    console.log(formData)
    form.reset()
}

form.addEventListener('submit', onLoginForm)