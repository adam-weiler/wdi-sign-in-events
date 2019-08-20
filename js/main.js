document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('div.modal');
    // console.log(modal)

    const btnSignin = document.querySelector('button.signin');
    // console.log(btnSignin);

    btnSignin.addEventListener('click', (e) => {
        modal.style.display = 'block';
        // console.log(modal.style.display);

        const inputUser = document.querySelector('input#user');
        // console.log(inputUser)

        const inputPass = document.querySelector('input#pass');
        // console.log(inputPass)

        const btnSubmit = document.querySelector('button.submit');
        // console.log(btnSubmit);

        const btnClose = document.querySelector('button.close');
        // console.log(btnClose);

        inputUser.addEventListener('focus', (e) => {
            inputUser.classList.remove('error');
        });

        inputPass.addEventListener('focus', (e) => {
            inputPass.classList.remove('error');
        });

        btnSubmit.addEventListener('click', (e) => {
            inputUser.classList.add('error');
            inputPass.classList.add('error');
        });

        btnClose.addEventListener('click', (e) => {
            modal.style.display = '';
        });
    });
});
