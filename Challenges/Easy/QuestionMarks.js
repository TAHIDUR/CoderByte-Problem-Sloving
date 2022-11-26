function QuestionsMarks(str) { 

    const reg = /^\d+\.?\d*$/;
    let digit_location = [];
    let chars_between_digits = [];
    let status = true;
    let sum_of_digits = [];
  
    // code goes here  
    str.split('').forEach((v, index) => 
      {
        if(reg.test(v))
        {
          digit_location.push(index);
        }
      }
    );
    
    // if(digit_location.length < 1 || digit_location.length%2 !== 0){
    if(digit_location.length < 1){
      return false;
    }
  
    console.log('digit length check ok: ', status)
  
  
  
    // digit_location.map((v,i) => );
    for(i=0; i<=digit_location.length/2; i++)
    {
      if(i%2 == 0)
      {
        sum_of_digits.push(parseInt(str[digit_location[i]])+parseInt(str[digit_location[i+1]]));
        chars_between_digits.push(str.slice(digit_location[i]+1,digit_location[i+1]))
      }
    }
  
  
  
  
  
    const question_occurance = (pattern) => {
      let occurance = 0;
      for(i=0; i<pattern.length; i++)
      {
        pattern.charCodeAt(i)===63 ? occurance++ : 0
      }
      if(occurance<3)
      {
        return false;
      }
    };
  
    
  
  
  
    let has3Ques = chars_between_digits.every((i) => {
          let occurance = 0;
          if(question_occurance(i) == false)
          {
            status = false;
            return false;
          }
  
          return true;
  
      });
  
      if(has3Ques === false)
      {
        return false
      }
  
    console.log('3 ques marks ok: ', status)
  
  
    status = sum_of_digits.some((value) => value === 10)
  
      console.log('sum of 10 ok: ', status)
  
  
    return status;
  
  }
     
  // keep this function call here 
  console.log(QuestionsMarks(readline()));