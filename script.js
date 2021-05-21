

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

  localStorage.setItem(timeHrs, userText);

  console.log(timeHrs);
  const formText = $('.description')
  // asking if the html matches the current hour from moment.js
  if (timeHrs < moment().format("HH")) {
    console.log('test');
    // console.log(moment().format("HH"));
    // attaching its class to change colors
    formText.attr({

      "class": "past"


    })
  } else if (timeHrs === moment().format("HH")) {
    formText.attr({

      "class": "present"


    })
  } else if (timeHrs > moment().format("HH")) {
    formText.attr({

      "class": "future"


    })
  }


});



// function to save to local storage
// function saveReminder() {
//   // grabbing text area from html

//   // setting to local storage

//   console.log(userText)
//   console.log(timeHrs)
// };







