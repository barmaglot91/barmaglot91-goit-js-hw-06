const nameType = document.querySelector('#name-input');
const nameText = document.querySelector('#name-output');
let nameBase = 'Anonymous';

const nameTypeAdd = (e) =>{
    if (e.currentTarget.value === '') {
        nameText.textContent = 'Anonymous';
    }
    else {
    nameText.textContent = e.currentTarget.value
    }
};

nameType.addEventListener('change', nameTypeAdd);