// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


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

// create function to pull it back out of local storage for loop to loop through text area

// for loop to link the colors changing along with moment.js if else statements








// CODE STARTS BELOW HERE 

// moment.js to display current date
const currentDate = moment().format('dddd MMMM YYYY');
$("#currentDay").text(currentDate);






// creating click event for EACH save button
$(".saveBtn").on("click", function (event) {
  const saveButton = $(".saveBtn");
  console.log('click');
});




var enteredText = document.querySelector(".textarea");
// function to save to local storage
function saveEvent() {
  // save entered event from user from textarea
  const eventText = $(this).siblings('.textarea')
  enteredText.textContent = eventText
  //  set to local storage
  localStorage.setItem($(eventText), JSON.stringify($(eventText)));


};
saveEvent();









