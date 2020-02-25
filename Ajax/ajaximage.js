function imageajax() {
  // var cont =document.getElementById("rows");
  // cont.addEventListener("click",function(){
  var api = "https://jsonplaceholder.typicode.com/photos"
  var ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function () {
    var cont = document.getElementById("rows");
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      var text = " ";
      for (i= 0; i<100; i++) {
        // text += `<div class= 'col-xs-2 col-sm-3  col-md-2 mt-4' ><a data-toggle="modal" href="#myModal" class='bigimage' href='${data[i].url}' target ='_self'><img  src ='${data[i].thumbnailUrl}'></div>`;

        text += `<div id ='row' class= 'col-xs-2 col-sm-3  col-md-2 mt-4' ><img onclick=showImage("${data[i].url}") data-toggle="modal" data-target="#myModal" src ='${data[i].thumbnailUrl}'></div>`;
        // imageclick( data[i].url);
      }
      cont.innerHTML = text;
    }
  }
  ajax.open("GET", api);
  ajax.send()
}
function showImage(url){
var modalimage=document.getElementById("image");
modalimage.setAttribute("src",url);
}

imageajax()
