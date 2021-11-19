function dishtv(){
    document.getElementById('dishtvdth').style.display='block';
    document.getElementById('airteldth').style.display='none';
    document.getElementById('sundth').style.display='none';
    document.getElementById('tataskydth').style.display='none';
    document.getElementById('d2hdth').style.display='none';


  }

function airteldth(){
    document.getElementById('airteldth').style.display='block';
    document.getElementById('dishtvdth').style.display='none';
    document.getElementById('sundth').style.display='none';
    document.getElementById('tataskydth').style.display='none';
    document.getElementById('d2hdth').style.display='none';
    



}

function sundth(){
  document.getElementById('airteldth').style.display='none';
  document.getElementById('dishtvdth').style.display='none';
  document.getElementById('d2hdth').style.display='none';
  document.getElementById('tataskydth').style.display='none';
  document.getElementById('sundth').style.display='block';


}
function tataskydth(){
  document.getElementById('airteldth').style.display='none';
  document.getElementById('dishtvdth').style.display='none';
  document.getElementById('tataskydth').style.display='block';
  document.getElementById('sundth').style.display='none';
  document.getElementById('d2hdth').style.display='none';


}
function d2h(){
  document.getElementById('airteldth').style.display='none';
  document.getElementById('dishtvdth').style.display='none';
  document.getElementById('tataskydth').style.display='none';
  document.getElementById('d2hdth').style.display='block';
  document.getElementById('sundth').style.display='none';


}



var  moneycopy=function(id){
  var x = document.getElementById(id).textContent;
  let price=x.slice(3,7);
  console.log(x);
  document.getElementById('amount').value = price;

}
