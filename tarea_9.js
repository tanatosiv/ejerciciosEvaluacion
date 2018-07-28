function remove(s){
    
      let stringToConvert = s;
      let convertedArray  = [...stringToConvert];
    
      function out(value) {
           return value !==  "¡" ;
      }
      function out1(value2) {
           return value2 !==  "!" ;
      }
       
      let remove = convertedArray.filter(out);
      let removetwo = remove.filter(out1);
     
      removetwo.push("!")
      
      let string = removetwo.join('');
      console.log(string);
  }
  
  remove("¡Party!");
  