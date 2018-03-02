$(document).ready(function(){

  var name = $(".topRight")
  console.log(name);
  $(name).on("click", function(){
    console.log("clicked");
    $(name).css( {"-webkit-transform":"translateY(-200px) translateX(90px) skewX(35deg)"});
    // $(name).css({"-webkit-transform":""});
  })


})