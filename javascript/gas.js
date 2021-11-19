
var  operator=function(id){

    let x = document.getElementById(id).textContent;
    let price=x.substr(0,x.length-12);
    console.log(price);
    document.getElementById('operator-name').value = price;
  
  }