// Step 1 Add an event handler with the submit button
document.getElementById('btnSubmit').addEventListener('click',function(){
    // Step 2 Get the email address inside the input field
    
    const userEmail = document.getElementById('userEmail');
    // always remember to use .value to get text from an input field
    const email = userEmail.value;
    // console.log(email);
    // step 3 get the password
    // 3a Get the element
    // 3c get the  
    const userPass =document.getElementById('userPass');
    const pass = userPass.value;
    // console.log(pass);

    // Danger zone never verify user email or ID using client side

    // step 4 verify email and password

    if (email === 'jibonenai@anondo.com' && pass === 'secret'){
        window.location.href='bank.html';
    }
    else {alert('No Password No money No honey')}


})




