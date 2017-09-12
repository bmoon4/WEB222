


var validateFirstName = function(){

 var firstName = document.getElementById('fname').value.trim();
 var ErrorMessage =document.getElementById("FnameError");
     ErrorMessage.innerHTML = '';

   if ( /^[A-Za-z]+$/.test(firstName) && firstName.length >= 6){
        return true;
   }
    else{
        ErrorMessage.innerHTML='Wrong Name!';
        return false;
    }     
};


var validateLastName = function(){
 
 var lastName = document.getElementById('lname').value.trim();
   if ( /^[A-Za-z]+$/.test(lastName))
        return true;
    else
        return false;     
};

 
   function validatePassword(){
    var password =  document.getElementById('password').value.trim();   
    var ErrorMessage = document.getElementById("PasswordError");
        ErrorMessage.innerHTML = '';
      if (!password == ""){
          //must start with letters not numbers
          if ( /[A-Za-z]/.test(password[0])){  ///[A-Za-z]/.test(zip[0])    //if ( /^[A-Za-z]+$/.test(password[0]))
           // length must be 8 letters
            if (password.length == 8){
              //lower case validation
              if( password.search(/[a-z]/) >= 0){
                //upper case validation
                if (password.search(/[A-Z]/) >= 0){
                  //digit validation
                  if (password.search(/[0-9]/) >= 0){
                      return true;          
                  }//if (password.search(/[0-9]/) >= 0) 
                  else {
                       ErrorMessage.innerHTML='Must contain at least one number!';
                       return false;
                 }
                }// if (password.search(/[A-Z]/) >= 0){ 
                else {
                       ErrorMessage.innerHTML='Must contain at least one uppercase letter!';
                      return false;
                }
             } //if( password.search(/[a-z]/) >= 0 ){ 
             else {
                
                   ErrorMessage.innerHTML='Must contain lowercase letter!';
                   return false;
             }
           } //if 
           else {
                ErrorMessage.innerHTML='Password must be 8 characters!';
                return false;
        }
      }
      else {
         ErrorMessage.innerHTML='Start with letters!';
         return false; 
    }
}
return false;
};
   
 function validateRePassword(){
    var password =  document.getElementById('password').value.trim();
    var passwordRe =  document.getElementById('repassword').value.trim();
    var ErrorMessage = document.getElementById("RePasswordError");
        ErrorMessage.innerHTML = '';
   if (!passwordRe == ""){
         if (passwordRe == password){
                return true;
         }
         else{
               ErrorMessage.innerHTML='Matching Error!';
                return false;
         }
    } 
    else{
      return false;
    }
};

 
function validateZip(){
  var zip =  document.getElementById('zip').value.trim();
  var ErrorMessage = document.getElementById("ZipError");
      ErrorMessage.innerHTML = '';
  if(!zip ==""){
        if(zip.length==6){
            if( /[A-Za-z]/.test(zip[0])&&/[A-Za-z]/.test(zip[2])&&/[A-Za-z]/.test(zip[4])){
                if(/[0-9]/.test(zip[1])&&/[0-9]/.test(zip[3])&&/[0-9]/.test(zip[5])){
                    return true;
                }else{
                    ErrorMessage.innerHTML =  "Wrong Zipcode!";
                    return false;
                }
            }
            else{
                ErrorMessage.innerHTML =  "Wrong Zipcode!";
                return false;
            }
        }
        else{
             ErrorMessage.innerHTML = "Wrong Zipcode!";
            return false;
        }
  }
  else{
      return false;
  }
};


function validateStreet(){
 //<div id="StreetError"></div>
var street=document.getElementById("street").value.trim();
   var ErrorMessage = document.getElementById("StreetError");
        ErrorMessage.innerHTML = '';
 if (street.search(/[0-9]/) >= 0){
      ErrorMessage.innerHTML = "Cannot contain digits";
     return false;
 }
   return true; 
};



function validateCity(){
var city=document.getElementById("city").value.trim();

 if ( /^[A-Za-z]+$/.test(city))
        return true;
    else
        return false;     
};



function validateForm(){
 
if(validateFirstName()==true && validateLastName()==true && validatePassword()==true && validateRePassword()==true &&
    validateZip()==true && validateCity()==true &&validateStreet()== true)
        return true;
else
       return false;
};