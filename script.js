// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.



  $(document).ready(function() {
    // Get current date using Day.js
    var currentDate = dayjs().format("dddd, MMMM D");
    $("#currentDay").text(currentDate);
  
    // Function to update time block colors
    function updateTimeBlockColors() {
      var currentHour = dayjs().hour();
      // console.log(currentHour)
  
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        if (blockHour < currentHour) {
          $(this).removeClass("present future").addClass("past");
        } else if (blockHour === currentHour) {
          $(this).removeClass("past future").addClass("present");
        } else {
          $(this).removeClass("past present").addClass("future");
        }
      });
    }
  
    
    updateTimeBlockColors();
  
   
    $(".saveBtn").on("click", function() {
      var hour = $(this).siblings(".hour").text();
      var description = $(this).siblings(".description").val();
      localStorage.setItem(hour, description);
    });
  
   
    $(".time-block").each(function() {
      var hour = $(this).find(".hour").text();
      var description = localStorage.getItem(hour);
  
      if (description) {
        $(this).find(".description").val(description);
      }
    });
  });
  


});



