// var number1 = $("#side1").val();
// var number2 = $("#side2").val();
// var number3 = $("#side3").val();
$(document).ready(function(){
  $("form#generator").submit(function(){
    event.preventDefault()
    var number1 = parseInt($("#side1").val());
    var number2 = parseInt($("#side2").val());
    var number3 = parseInt($("#side3").val());
    if(number1 === number2 && number2 === number3){
      $("form").append("<h1> We Generated an Equilateral triangle for you</h1>")
    }
    else if (number1 === number2 || number2 === number3 || number1 === number3){
      $("form").append("<h1>We generated an isosceles triangle for you</h1>")
    }
    else if (number1 + number2 >= number3 || number2 + number3 >= number1 || number1 + number3 >= number2){
      $("form").append("<h1>Wait a minute! Thats not a triangle</h1>")
    }
    else if (isNaN(number1,number2,number3)){
      $("form").append("<h1>Wait a minute! Thats is not a fucking number</h1>")
    }

    else if (number1 != number2 || number2 != number3 || number1 != number3){
      $("form").append("<h1>We generated a scalene triangle for you</h1>")
    }

  });
})
