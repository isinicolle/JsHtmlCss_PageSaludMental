const form = document.getElementById('user-form'); //formulario
const submitButton = document.getElementById('submit-btn'); //boton

let timeout = null;

document.querySelectorAll('.form-box').forEach((box) => {
    const boxInput = box.querySelector('input');

    boxInput.addEventListener('keydown', (event) =>{
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            console.log(`Input ${boxInput.name} value: `, boxInput.value);

            validation(box, boxInput)
        }, 300);
    });
});

validation = (box, boxInput) =>{
    if(boxInput.name == 'nickName'){
        console.log('Validacion para nombre');
        if(boxInput.value == '') {
            box.classList.remove('form-success');
            box.classList.add('form-error');
        }else{
            box.classList.remove('form-error');
            box.classList.add('form-success');
        }
    }
}


