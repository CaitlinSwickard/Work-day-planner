

// time blocks for standard business hours = 9-5 (9blocks)
// color code time blocks: use if (time < moment().format('HH') to else if colors
// all the colors are saved in css need to append their class 
// if hr has passed = grey
// if hr is present = red
// if hr is future = green

// click event to select a time block
// able to enter event 
// click on save button for event (click event)
// event is added to local storage
// when refresh page the event is still there


// create click event for save button FOR EACH BUTTON FOR LOOP

// function to save  to local storage call on sibling to text area
// save it to local storage with the hour it is attached to?
// the name of the variable to local storage then the value

// create function to pull it back out of local storage for loop to loop through text area

// for loop to link the colors changing along with moment.js if else statements








// CODE STARTS BELOW HERE 

// moment.js to display current date
const currentDate = moment().format('dddd MMMM Do YYYY');
$("#currentDay").text(currentDate);



// creating click event for EACH save button
$(".saveBtn").on("click", function () {
  const userText = $(this).siblings('.description').val();
  const timeHrs = $(this).parent().attr('id');
  console.log(timeHrs);
  localStorage.setItem(timeHrs, userText);
});



// creating function to change colors on hours
$(".time-block").each(function () {
  // grabbing html id for current hour
  const timeHr = $(this).attr('id');
  console.log(this);
  // changing html from string to number to compare to moment.js
  const times = parseInt($(this).attr('id'));
  console.log(times);
  // asking if the html matches the current hour from moment.js
  if (times < moment().format("HH")) {
    // attaching its class to change colors
    $('.description').addClass('past');
  } else if (times === moment().format("HH")) {
    $('.description').addClass('present');
  } else if (times > moment().format("HH")) {
    $('.description').addClass('future');
  }
})



// const formText = $('.description')
// const timeHrs = $(this).parent().attr('id');
// console.log(this);
// // asking if the html matches the current hour from moment.js
// if (timeHrs < moment().format("HH")) {
//   console.log(true);
//   // console.log(moment().format("HH"));
//   // attaching its class to change colors
//   formText.attr({
//     "class": "past"
//   })
// } else if (timeHrs === moment().format("HH")) {
//   formText.attr({
//     "class": "present"
//   })
// } else if (timeHrs > moment().format("HH")) {
//   formText.attr({
//     "class": "future"
//   })
// }



// gets value in hourly form for each hour and displays it to the page
// when page refreshes value will still be there if clicked on save
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));




