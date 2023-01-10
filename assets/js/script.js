var descriptionEl = $('.description').val()
var leadEl = $('#currentDay');


$(function () {
  $('.saveBtn').on("click",function() {
    console.log($(this).siblings("textarea").val());
    var hour = $(this).parent().attr("id");
    var message = $(this).siblings("textarea").val();
    localStorage.setItem(hour, message);
    console.log("save me");
  }) 


  $(".time-block").each(function() {
    var idHour = parseInt($(this).attr("id").split("-")[1])
    console.log(idHour)
    var currentHour = dayjs().hour();
    console.log(currentHour);
    if (idHour === currentHour) {
      $(this).addClass("present");
    } else if (idHour < currentHour) {
      $(this).addClass("past");
    } else if (idHour > currentHour) {
      $(this).addClass("future");
    }
  })
  

  $("textarea").each(function() {
    console.log($(this).parent().attr("id"));
    var hour = $(this).parent().attr("id");
    var message = localStorage.getItem(hour);
    $(this).val(message);
  }) 

  
  var now = dayjs().format('MMMM DD, YYYY');
  $('#currentDay').text(now);
  console.log(now);

  
});
