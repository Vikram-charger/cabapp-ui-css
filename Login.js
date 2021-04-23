let mobNo = document.getElementById('mobileNo');
let passWord = document.getElementById('password');
let button = document.getElementById('authenticateButton');

/**
 * Event listener is called when the button clicked.
 */
button.addEventListener("click", function(){
    event.preventDefault();
    let getMobileNo = mobNo.value;
    let getPassword = passWord.value;
    if(validateMobileNo(getMobileNo) && validatePassword(getPassword)){
        alert("Login Successful");
        window.location.assign("DisplayCabs.html");
    }
    else{
        alert("Invalid Login.");
    }
}
);

/**
 * This function validates the user given mobile number.
 */
function validateMobileNo(mobileNo){
    if(mobileNo.length == 10) return true;
    return false;
}
function validatePassword(password){
    if(password.length >= 8 && password == "OptimusVk") return true;
    return false;
}