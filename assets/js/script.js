// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// dayjs().isSame('hours')
// $(".lead").wrap("wait");
// $(".container-lg").wrap("body");
// var btn = event.target
// .val gives value to the text area
var descriptionEl = $('.description').val
var saveBtnEl = $('.saveBtn');
var leadEl = $('#currentDay');
// var userText = $('')

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $(saveBtnEl).click(function (event) {
    $(event.target).closest(descriptionEl);
    console.log("save me");
  });

  // $(descriptionEl).append(text.)
  // dont assign to specific button ..parent div with id of x
  // event.target.closest div -with id-
  // color- second child of div hour 9
  // document.querySelector(".btn saveBtn col-2 col-md-1").addEventListener("click", function() {
// Dom traversal children, div to ID ("this").attri("ID")
  // })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // loop
  // if id hour > hh gray
  // else if id hour === hh red
  // else id hour < dayjs().isSame('hours') green
  // <time>
  // query isbefore same compare
  
  var hour = $('#hour');
  console.log("hour"); 

// function timeBlock() {
//   for (i=0; i<  )
// }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  
  var now = dayjs().format('MMMM DD, YYYY');
  $('#currentDay').text(now);
  console.log(now);

  
});

// var countDown = setInterval(currentTime, 1000);
//   function currentTime() {
//     now--;
//     $('#currentDay').text(now);
//     currentTime();
//   }