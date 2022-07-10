const form = document.querySelector('.login-form');

function onLoginForm(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements
    const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        email: email,
        password: password
    }
    console.log(formData)
    form.reset()
    
    if (email === '' || password === '') {
        alert('Пусто')
        form.reset();
        return
    }
}

form.addEventListener('submit', onLoginForm)