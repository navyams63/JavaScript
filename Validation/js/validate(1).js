function validate(e) {
    e.preventDefault();

    /* variables for each form elements*/
            /* document.fermName.fieldName.value*/
            var name = document.cForm.name.value;
            var email = document.cForm.email.value;
            var mobile = document.cForm.mobile.value;
            var city = document.cForm.city.value;
            var gender = document.cForm.gender.value;
            var lang = [];
            var checkOpt = document.getElementById("lang[]");
            for ( var i = 0; i< checkOpt.length; i++) {
                if(checkOpt[i].checked) {
                    //populate lang array with selected input values
                    lang.push(checkOpt[i].value);
                }
            }
            console.log('lang = ', lang);

            /*Define an error variables*/
            var nameErr = emailErr = mobileErr = genderErr = langErr = true;
            // var nameErr = true;
            // var emailErr = true;
            // var mobileErr = true;
            // var genderErr = true;
            // var langErr = true;

            // name validation
            if( name === "") {
                // it name = empty, the below is printed
                printError("nameErr","Name field cannot be empty");
            }else{
                let regex = /^[a-zA-Z\s]-@\z$/;
                if(regex.test(name) === false) {
                    printError("nameErr", "Please enter a valid name");
                }else{
                    printError("nameErr", "");
                    nameErr = false;
                }
            }

            // email 
            if( email === ""){
                printError("emailErr, Email field annot be empty")
            }else{
                let regex = /^\s-@\s+\.s+$/;
                if(regex.test(name) === false) {
                    printError("nameErr", Please enter a valid name");
                }else{
                    printError("nameErr","");
                    nameErr = false;
                }
            }
            // email validation
            if(mobile === ""){
                printError("mobileErr", "mobile field cannot be empty");
            }else{
                let regex = /^[6-9]\d{9}$/;
                if(regex.text(mobile) === false) {
                    printError("mobileErr","Invalid Mobile number");
                }else{
                    printError("mobileErr", "");
                    mobileErr = false;
                }
            }

            /* city validation*/
            if(city === "null") {
                printError("cityErr", "Please select city name");
            }else{
                printError("cityErr", "");
                cityErr = false;
            }

            /* gender validation*/ */
            if(gender === "") {
                printError("genderErr","Please select gender");
            }else{
                printError("genderErr", "");
                genderErr = false;
            }

            /* lang validation */
            if(lang.length === 0) {
                printError("langErr","Please select language");
            }else{
                printError("langErr","");
                genderErr = false;
            }

            if((nameErr && emailErr && mobileErr && genderErr && cityErr && langErr) === false) {
                let data = {
                    name : name,
                    email: email,
                    mobile:mobile,
                    gender:gender,
                    city:city,
                    language:lang
                };
                //console,log('data = ', data);
            }
}



/* Defining a function to display the errror message*/ 
function printError(eleId, msg){
    document.getElementById(eleId).innerText = msg;
}







































































































