function validateMobile() {
    // console.log("mobile");
    var mobile = document.getElementById("contact").value;
    console.log(mobile);
    if (mobile === '') {
         // alert("Invalid Mobile number ");
         document.getElementById("error_message").innerHTML = "Invalid Mobile Number ";
         document.getElementById("contact").classList.add("error");
    }
    else {
         console.log(mobile.length);
         if (mobile.length !== 10) {
              // alert("Invalid Mobile number ");
              document.getElementById("error_message").innerHTML = "Invalid Mobile Number ";
              document.getElementById("contact").classList.add("error");
         }
         else {
              document.getElementById("error_message").innerHTML = "";
              document.getElementById("contact").classList.remove("error");

         }
    }
}

function validateEmail() {
    console.log("Email ");
    var email = document.getElementById('email').value;
    console.log(email);
    var result = email.indexOf('@') < 0 ? false : true;
    var result2 = email.indexOf('.com') < 0 ? false : true;
    console.log(result);
    if (result === false || result2 === false) {
         // alert("Invalid email address ");
         document.getElementById('email_message').innerHTML = "Invalid Email Address";
         document.getElementById('email').classList.add("error");
        }
        else {
            document.getElementById('email_message').innerHTML = "";
            document.getElementById('email').classList.remove("error");
        }
    }
    
    function validatePassword()
    {
        var password = document.getElementById('password').value ;
        console.log(password) ;
        
        if (password === '')
        {
            document.getElementById('password_error').innerHTML = "Invalid Password " ;
            document.getElementById('password').classList.add("error") ;
        }
        else
        {
            console.log(password.length) ;
            if (password.length !== 8)
            {
                document.getElementById('password_error').innerHTML = "Invalid Password " ;
                document.getElementById('password').classList.add("error") ;
            }
            
            else
            {
                document.getElementById('password_error').innerHTML = "" ;
                document.getElementById('password').classList.remove("error") ;

            }
        }
    }

    function validatePincode()
    {
        var pincode = document.getElementById('pincode').value ;
        console.log(pincode) ;

        if (pincode === '') {
            document.getElementById("pincode_error").innerHTML = "Invalid Pincode Number ";
            document.getElementById("pincode").classList.add("error");
       }
       else {
            console.log(pincode.length);
            if (pincode.length !== 6 & pincode.length !== 7 ) {
                 document.getElementById("pincode_error").innerHTML = "Invalid Pincode Number ";
                 document.getElementById("pincode").classList.add("error");
            }
            else {
                 document.getElementById("pincode_error").innerHTML = "";
                 document.getElementById("pincode").classList.remove("error");
   
            }
       }        
    }


function validate()
{
    validateMobile();
    validateEmail();
    validatePassword();
    validatePincode();
}