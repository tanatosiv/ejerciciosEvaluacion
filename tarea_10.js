function gooseFilter(birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
    return birds.filter(item => !geese.includes(item));
  };
  
  
  let names = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
  
  console.log(  gooseFilter(names)  );
   
  
