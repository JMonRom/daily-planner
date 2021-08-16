$(document).ready(function() {

  // sets current day on site
  let today = moment()

  $('#currentDay').text(today.format("MMM Do, YYYY"));

// once page loads the save button will be ready to use and save to local storage whatever user inputs
  $('.saveBtn').on('click', function() {
    let scheduleText = $(this).siblings('.description').val();
    let scheduleTime = $(this).parent().attr("id");

    localStorage.setItem(scheduleTime, scheduleText);
  })

// on page start the user's time will be used to determine what color the time blocks are highlighted with
  function indicateTimeColor() {
  let currentTime = today.hour();

  $('.time-block').each(function() {
    let timeColorChange = parseInt($(this).attr("id").split('hour'));
    console.log(timeColorChange)
    if (timeColorChange < currentTime) {
      $(this).addClass("past");
    } else if (timeColorChange === currentTime) {
      $(this).removeClass("past")
      $(this).removeClass("future")
      $(this).addClass("present")
    } else {
      $(this).removeClass("past")
      $(this).removeClass("present")
      $(this).addClass("future") 
    }
  }
  )};

  $('#9 .description').val(localStorage.getItem('9'))
  $('#10 .description').val(localStorage.getItem('10'))
  $('#11 .description').val(localStorage.getItem('11'))
  $('#12 .description').val(localStorage.getItem('12'))
  $('#13 .description').val(localStorage.getItem('13'))
  $('#14 .description').val(localStorage.getItem('14'))
  $('#15 .description').val(localStorage.getItem('15'))
  $('#16 .description').val(localStorage.getItem('16'))
  $('#17 .description').val(localStorage.getItem('17'))

  indicateTimeColor();
})


