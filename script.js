

// moment.js to display current date
const currentDate = moment().format('dddd MMMM Do YYYY');
$("#currentDay").text(currentDate);



// creating click event for EACH save button
$(".saveBtn").on("click", function () {
  const userText = $(this).siblings('.description').val();
  const timeHrs = $(this).parent().attr('id');

  localStorage.setItem(timeHrs, userText);
});



// creating function to change colors on hours
$(".time-block").each(function () {
  // grabbing html id for current hour
  const timeHr = $(this).attr('id');
  console.log(this);

  // changing html from string to number to compare to moment.js
  let times = parseInt($(this).attr('id'));
  console.log(times);

  let momentHr = parseInt(moment().format("HH"));
  console.log(momentHr);

  // asking if the number matches the current hour from moment.js
  if (times < momentHr) {
    // attaching its class to change colors
    $(this).children('.description').addClass('past');

  } else if (times === momentHr) {
    $(this).children('.description').addClass('present');


  } else if (times > momentHr) {
    $(this).children('.description').addClass('future');

  }
})



// gets value in hourly form for each hour and displays it to the page
// when page refreshes value will still be there if clicked on save
$("#09 .description").val(localStorage.getItem("09"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));




