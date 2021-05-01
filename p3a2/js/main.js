$(document).ready(function() {

    // run function on initial page load
    randomImage1();
});
  function randomImage1(){
    var imgArray = [
      "image/aegis.jpg",
      "image/alliance.png",
      "image/lgd.jpg",
      "image/nigma.jpg",
      "image/nigma1.jpg",
      "image/liquid.jpg",
      "image/secret.jpg",
      "image/og.jpg",
      "image/og1.png"
    ];
    var randomNumber = Math.floor(Math.random() * imgArray.length);
    console.log(randomNumber);
    var image = imgArray[randomNumber];
    console.log(imgArray[randomNumber]);
    console.log(image);
    $('#aegis').attr('src', image);
    $('#buttons').click(function() {
      location.reload(true);
    });
  }
