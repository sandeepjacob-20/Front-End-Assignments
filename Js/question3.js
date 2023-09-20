var username;
var password;
function checkAll(){
    let username = document.getElementById("username").value;
    console.log(username)
    let password = document.getElementById("password").value;
    if (username==''||password=='')
        alert("Username and pasword cannot be null");
    else{
        if(password.length<=4)
            alert("Length of password should be more than 4")
        if (username=="sandeep"&&password=='imfastafboi')
            document.write('logged in !!!');
    }

}
