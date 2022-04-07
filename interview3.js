function printValues() {
    var arr = [1,2,3,4,5]
    for( var i = 0;  i< arr.length; i++) {
      setTimeout(function(){console.log("ELement at position " + i + "is" + arr[i])},3000)
    }
  }
  printValues();



  //what will be the output