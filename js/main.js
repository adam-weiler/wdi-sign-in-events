document.addEventListener('DOMContentLoaded', function() {
    // const status = document.querySelector('.status');

    const modal = document.querySelector('div.modal');

    


    const btnSignin = document.querySelector('button.signin');
    // console.log(btnSignin);

    
    


    btnSignin.addEventListener('click', (e) => {
        modal.style.display = 'block';
        // console.log(modal.style.display);


        // console.log(btnClose);
        const btnClose = document.querySelector('button.close');


        btnClose.addEventListener('click', (e) => {
            modal.style.display = '';
            // console.log(modal.style.display);
    
    
            // console.log(btnClose);
            
    
    
        });


    });


    //Display none: disabled
});