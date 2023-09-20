document.addEventListener('DOMContentLoaded',function(){
    //form columns
    const form = document.getElementById('regForm');
    const name = document.getElementById('fullname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const pass = document.getElementById('password');
    const confirmpass = document.getElementById('confirmpass');

    //Error messages
    const nameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passError = document.getElementById('passError');
    const confirmpassError = document.getElementById('confirmpassError');

    form.addEventListener('submit',function(event){
        //prevent default form submit
        event.preventDefault();

        if(!name.value.trim())
            nameError.textContent = "Name is required";
        else
            nameError.textContent = '';
            
        if(!email.value.trim())  
            emailError.textContent = "Email address is required";
        else
            emailError.textContent = '';

        if(phone.value.length!=10||checkPhone(phoneNumber))
            phoneError.textContent = "Phone number is invalid";
        else
            phoneError.textContent = '';

        if(pass.value.length<8)
            passError.textContent = "Password must be atleast 8 characters long"
        else
            passError.textContent = "";
     
        if(pass.value != confirmpass.value)
            confirmpassError.textContent = "Passwords do not match"
        else
            confirmpassError.textContent = "";  
    })
})


function checkPhone(phoneNumber){
    const regex = new RegExp("[^0-9]");
    return regex.test(phoneNumber);
}