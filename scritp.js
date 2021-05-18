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


// display current date at the top of the planner. use moment.js library to do that. 

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


// CODE STARTS BELOW HERE 

// moment.js to display current date
const currentDate = moment().format('dddd MMMM YYYY');
$("#currentDay").text(currentDate);

// Select the existing DOM element, <div id="root">, and assign to a rootEl variable
// const rootEl = $('#root');


// variable to store hours (9-5) 
const dailyHours = [
  {
    // hour text
    hour: '9am',
    // time for moment js
    time: '09',
    // empty event string to add event
    event: "",
  },
  {
    hour: '10am',
    time: '10',
    event: "",
  },
  {
    hour: '11am',
    time: '11',
    event: "",
  },
  {
    hour: '12pm',
    time: '12',
    event: "",
  },
  {
    hour: '1pm',
    time: '13',
    event: "",
  },
  {
    hour: '2pm',
    time: '14',
    event: "",
  },
  {
    hour: '3pm',
    time: '15',
    event: "",
  },
  {
    hour: '4pm',
    time: '16',
    event: "",
  },
  {
    hour: '5pm',
    time: '17',
    event: "",
  },
]

// // to loop through hours variable
// dailyHours.forEach(function () { }


// // creating hours row and adding class from css
// let hourBlock = $('<form>').attr('class', 'row');
// // appending hours to html div
// $('#root').append(hourBlock);


// let eventBlock = $('<div>').attr('class', 'description')





































// // creating save button
// // grabbing save button image
// const saveButtonImage = $("<i class='fas fa-save'></i>")
// // makes image a button
// const saveButton = $('<button>')
//   // adding css class to button
//   .attr('class', 'saveBtn')
// // appends save button to page
// saveButton.append(saveButtonImage);
