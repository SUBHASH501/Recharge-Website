function jio(){
    document.getElementById('jio').style.display='block';
    document.getElementById('airtel').style.display='none';
    document.getElementById('bsnl').style.display='none';
    document.getElementById('vi').style.display='none';
    document.getElementById('mtnl').style.display='none';


  }

function airtel(){
    document.getElementById('airtel').style.display='block';
    document.getElementById('jio').style.display='none';
    document.getElementById('bsnl').style.display='none';
    document.getElementById('vi').style.display='none';
    document.getElementById('mtnl').style.display='none';
    



}

function bsnl(){
  document.getElementById('airtel').style.display='none';
  document.getElementById('jio').style.display='none';
  document.getElementById('vi').style.display='none';
  document.getElementById('mtnl').style.display='none';
  document.getElementById('bsnl').style.display='block';


}
function vi(){
  document.getElementById('airtel').style.display='none';
  document.getElementById('jio').style.display='none';
  document.getElementById('vi').style.display='block';
  document.getElementById('mtnl').style.display='none';
  document.getElementById('bsnl').style.display='none';


}
function mtnl(){
  document.getElementById('airtel').style.display='none';
  document.getElementById('jio').style.display='none';
  document.getElementById('vi').style.display='none';
  document.getElementById('mtnl').style.display='block';
  document.getElementById('bsnl').style.display='none';


}

// function moneycopy(){
     
//       // document.getElementById("amount").value="";
//        var x = document.getElementById("money1").textContent;
//        console.log(x);
//        document.getElementById('amount').value = x;

//       // document.getElementById("amount").value="";
//       //  var x = document.getElementById("money1").textContent;
//       //  console.log(x);
//       //  document.getElementById('amount').value = x;
//       //        var x=document.getElementById("money1");
//       //        var text=document.getElementById("amount");
//      //        text.value=text.value.replace(x.value,"");
// }

var  moneycopy=function(id){
  let x = document.getElementById(id).textContent;
  let price=x.slice(3,7);
  // console.log(price);
  document.getElementById('amount').value = price;

}