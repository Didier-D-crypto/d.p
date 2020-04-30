$(document).ready(function(){

 
  function dayTime() {
    $("#currentDay").html(moment().format("MMMM Do YYYY HH:mm:ss"));
    setInterval(dayTime, 1000);
  };
  
  //this local function presents live run of the time of day
  dayTime(); 






  //function to change textarea color based on time of day
  function colorChange() {
    const date= new Date();
    const x = date.getHours();

    // console.log("test");  this showed me that the function was running every second, but also led me to see the performance of the app tanks very quickly because I think I'm adding classes by the 10,000s. Need to add some kind of check before adding.
    
    if (x < 9) { //resets planner to next day at midnight
      $("textarea").addClass("future");
    }
    else if (x === 9) {
      $("textarea").addClass("future");
      $("#text9").removeClass("future");
      $("#text9").addClass("present");

    }
    else if (x === 10) {
      $("#text9").removeClass("present");
      $("#text9").addClass("past");
      $("#text10").addClass("present");
      $("#text11").addClass("future");
      $("#text12").addClass("future");
      $("#text13").addClass("future");
      $("#text14").addClass("future");
      $("#text15").addClass("future");
      $("#text16").addClass("future");
      $("#text17").addClass("future");
    }
    else if (x === 11) {
      $("#text9").addClass("past");
      $("#text10").removeClass("present");
      $("#text10").addClass("past");
      $("#text11").addClass("present");
      $("#text12").addClass("future");
      $("#text13").addClass("future");
      $("#text14").addClass("future");
      $("#text15").addClass("future");
      $("#text16").addClass("future");
      $("#text17").addClass("future");
    }
    else if (x === 12) {
      $("#text9").addClass("past");
      $("#text10").addClass("past");
      $("#text11").removeClass("present");
      $("#text11").addClass("past");
      $("#text12").addClass("present");
      $("#text13").addClass("future");
      $("#text14").addClass("future");
      $("#text15").addClass("future");
      $("#text16").addClass("future");
      $("#text17").addClass("future");

    }
    else if (x === 13) {
      $("#text9").addClass("past");
      $("#text10").addClass("past");
      $("#text11").addClass("past");
      $("#text12").removeClass("present");
      $("#text12").addClass("past");
      $("#text13").addClass("present");
      $("#text14").addClass("future");
      $("#text15").addClass("future");
      $("#text16").addClass("future");
      $("#text17").addClass("future");
    }
    else if (x === 14) {
      $("#text9").addClass("past");
      $("#text10").addClass("past");
      $("#text11").addClass("past");
      $("#text12").addClass("past");
      $("#text13").removeClass("present");
      $("#text13").addClass("past");
      $("#text14").addClass("present");
      $("#text15").addClass("future");
      $("#text16").addClass("future");
      $("#text17").addClass("future");
      
    }
    else if (x === 15) {
      $("#text9").addClass("past");
      $("#text10").addClass("past");
      $("#text11").addClass("past");
      $("#text12").addClass("past");
      $("#text13").addClass("past");
      $("#text14").removeClass("present");
      $("#text14").addClass("past");
      $("#text15").addClass("present");
      $("#text16").addClass("future");
      $("#text17").addClass("future");
    }
    else if (x === 16) {
      $("#text9").addClass("past");
      $("#text10").addClass("past");
      $("#text11").addClass("past");
      $("#text12").addClass("past");
      $("#text13").addClass("past");
      $("#text14").addClass("past");
      $("#text15").removeClass("present");
      $("#text15").addClass("past");
      $("#text16").addClass("present");
      $("#text17").addClass("future");
    }
    else if (x === 17) {
      $("#text9").addClass("past");
      $("#text10").addClass("past");
      $("#text11").addClass("past");
      $("#text12").addClass("past");
      $("#text13").addClass("past");
      $("#text14").addClass("past");
      $("#text15").addClass("past");
      $("#text16").removeClass("present");
      $("#text16").addClass("past");
      $("#text17").addClass("present");
    }
    else if (x > 17) {
      
      $("textarea").addClass("past");
    }
  }
  
 
    setInterval(colorChange, 1000);
  


  $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id"); 
    localStorage.setItem(time, value);
  });

  var hourNine = localStorage.getItem("hour-9");
  $("#text9").text(hourNine);
  
  var hourTen = localStorage.getItem("hour-10");
  $("#text10").text(hourTen);

  var hourEleven = localStorage.getItem("hour-11");
  $("#text11").text(hourEleven);

  var hourTwelve = localStorage.getItem("hour-12");
  $("#text12").text(hourTwelve);

  var hourThirteen = localStorage.getItem("hour-13");
  $("#text13").text(hourThirteen);

  var hourFourteen = localStorage.getItem("hour-14");
  $("#text14").text(hourFourteen);

  var hourFifteen = localStorage.getItem("hour-15");
  $("#text15").text(hourFifteen);

  var hourSixteen = localStorage.getItem("hour-16");
  $("#text16").text(hourSixteen);

  var hourSeventeen = localStorage.getItem("hour-17");
  $("#text17").text(hourSeventeen);

});






  