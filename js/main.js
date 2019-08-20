document.addEventListener('DOMContentLoaded', function() {
    // const status = document.querySelector('.status');

    const modal = document.querySelector('div.modal');

    


    const btnSignin = document.querySelector('.signin');
    console.log(btnSignin);


    btnSignin.addEventListener('click', (e) => {
        modal.style.display = 'block';
        // console.log(modal.style.display);

    });


    //Display none: disabled
});