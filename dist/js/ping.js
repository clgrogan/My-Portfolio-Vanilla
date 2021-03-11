//url1 backend for the honey get list backend
let url1='https://honey-get-api.herokuapp.com';
ping(url1);

function ping(url){
  let imageObject= new Image();
  imageObject.src = url;
}