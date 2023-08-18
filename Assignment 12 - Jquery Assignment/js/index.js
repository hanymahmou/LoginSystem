
/*leftmenu*/

$(".openNav").click(function(){
  $("#leftMenu").animate({ width:'250px'},50)
 $("#home-content").animate({marginLeft :'250px'},50)
})

$(".closebtn").click(function(){
  $("#leftMenu").animate({ width:'0px'},50)
 $("#home-content").animate({marginLeft :'0px'},50)
})


/*scrollmenu*/
$("#leftMenu a").click(function(){
    
  var sectionId= $(this).attr("href");
  
  var positionOfSection = $(sectionId).offset().top;
  
  $("html , body").animate({scrollTop:positionOfSection},1000);
  
})



// Start Accordion Section
$("#sliderDown .toggle").click(function (e) {
  $(".inner").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

// End Accordion Section

// Start CountDown Timer

window.onload = function () {
  countDownTime("1 november 2023 9:00:00");
};

function countDownTime(countTo) {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  diffrentTime = futureDate - now;

  let days = Math.floor(diffrentTime / (24 * 60 * 60));
  let hours = Math.floor((diffrentTime - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (diffrentTime - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    diffrentTime - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $(".days").html(`${days}`);
  $(".hours").html(`${hours} `);
  $(".minutes").html(`${mins} `);
  $(".seconds").html(`${secs} `);

  setInterval(function () {
    countDownTime(countTo);
  }, 1000);
}
// End CountDown Timer

// start contact section

var maxLength = 100;
$("textarea").keyup(function () {
  var length = $(this).val().length;
  var AmountLeft = maxLength - length;
  if (AmountLeft <= 0) {
    $("#chars").text("your available character finished");
  } else {
    $("#chars").text(AmountLeft);
  }
});

// End contact section

