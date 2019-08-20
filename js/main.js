document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('div.modal');
    // console.log(modal)

    const btnSignin = document.querySelector('button.signin');
    // console.log(btnSignin);

    
    


    btnSignin.addEventListener('click', (e) => {
        modal.style.display = 'block';
        // console.log(modal.style.display);

        const btnClose = document.querySelector('button.close');
        // console.log(btnClose);

        const btnSubmit = document.querySelector('button.submit');
        // console.log(btnSubmit);

        btnSubmit.addEventListener('click', (e) => {
            const inputUser = document.querySelector('input#user');
            // console.log(inputUser)

            const inputPass = document.querySelector('input#pass');
            // console.log(inputPass)
            // modal.style.display = '';
            // // console.log(modal.style.display);

            inputUser.className = 'error'
            inputPass.className = 'error'
        });

        btnClose.addEventListener('click', (e) => {
            modal.style.display = '';
            // console.log(modal.style.display);
        });


    });


    //Display none: disabled
});