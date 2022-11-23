function CodelandUsernameValidation(str) { 

    // code goes here  
    let length = str.length;
    
    let starts_with = str.charCodeAt(0);
  
    let last_char_ascii = str.charCodeAt(length-1)
  
    let status = true;
  
  
    if(length<4 || length>25)
    {
      return status = false;
    }
  
    if(starts_with<65 || starts_with>90 && starts_with<97 || starts_with>122)
    {
      return status = false;
    }
  
  
    for(let i=0; i<length; i++)
    {
      status = checkValid(str.charCodeAt(i));
  
      if(status === false)
      {
        return false;
      }
    }
  
  
    if(last_char_ascii === 95)
    {
      return false;
    }
  
  
    return status; 
  
  }
  
  
  const checkValid = (val) => {    
    if(val>=65 && val<=90 || val>=97 && val<=122 || val>=48 && val<=57 || val === 95)
    {
      return true;
    }else{
      return false
    }
  };
     
  // keep this function call here 
  console.log(CodelandUsernameValidation(readline()));