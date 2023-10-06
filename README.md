# busy-bees-need-schedules


## Technology Used 

| Technology Used | Resource URL | 
| ------------- |:-------------:| 
| HTML | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) | 
| Git | [https://git-scm.com/](https://git-scm.com/) | 

## Description 
In this project I created a color coded scheduler, that changes colors based on elements being in the past present or future, with the option to store scheduling information in local storage.

[Visit the Deployed Site]((https://armand57araujo.github.io/busy-bees-need-schedules/)

![Scheduler.png](/Scheduler.png)


## Code Example 


 
$(function () {

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
  



};




This project was a challenge, however it wasn't as challening as previous assignments, due to how much of this material was covered in class, and thanks to previous challenges, some of the more daunting asks were less scary. The color changing aspect made sense when you look at the css and compare it to the concept we covered in class with light and dark mode that you toggle between.



      <div id="hour-12" class="row time-block "  class="present future"  class="past future">
        <div class="col-2 col-md-1 hour text-center py-3">12PM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>

      <div id="hour-13" class="row time-block "  class="present future"  class="past future" >
        <div class="col-2 col-md-1 hour text-center py-3">1PM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>

      <div id="hour-14" class="row time-block"  class="present future" class="past future" >
        <div class="col-2 col-md-1 hour text-center py-3">2PM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>

      <div id="hour-15" class="row time-block " class="present future"  class="past future">
        <div class="col-2 col-md-1 hour text-center py-3">3PM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>



I was experiencing a problem at one point with the color coding at one point, after I was uner the impression that I fully comprehended the concept. It turns out it was army time that I was operating with, and the javascript was searching my HTML for elements to modify that weren't present. Thankfully, I was able to work with my tutor and read though and realize my HTML needed this minor adjustment in order for my Javascript to make the modifications. 



## Learning Points 


I was happy with how minor my error was on this project, I'm learning to be more mindful of my elements, and targeting them in my Javascript and CSS properly. Google, W3 and MDN are still my best friends that I kept and keep very closet but not quite as much.


## Author Info
Armand Araujo
Age: 28
Location: Santa Barbara, CA

 
* [LinkedIn](https://www.linkedin.com/in/armand-araujo-a82ba2291/) 
* [Github](https://github.com/Armand57araujo) 


## Credits 
