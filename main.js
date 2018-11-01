

var aboutus=document.getElementById('aboutus');
aboutus.addEventListener('click',function(event){
  event.preventDefault();
  window.location='aboutus.html';

});


var storesalesinfo=document.getElementById('storesalesinfo');
storesalesinfo.addEventListener('click',function(event){

  event.preventDefault();
  window.location='sales.html';


});

var goback=document.getElementById('homepage');
goback.addEventListener('click',function(event){
  event.preventDefault();
  window.location='index.html';

});