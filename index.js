var plannerContent = [];
// sets current day on site
var currentUserDay = moment().format("MMM Do, YYYY");
$('#currentDay').text(currentUserDay);

$(document).ready(function() {

  $('.saveBtn').on('click', function() {
    let scheduleText = $(this).sibling('.text-Info').val();
    let scheduleTime = $(this).parent().attr('id');

    localStorage.setItem(scheduleTime, scheduleText);
  })

  function indicateTimeColor() {
  let currentTime = moment().hour();
  
  $('.time-Slots').each(function () {
    let timeColorChange = parseInt($(this).attr('id').split('hour')[1]);

    if (timeColorChange < currentTime){
      $(this).removeClass('present')
      $(this).removeClass('future')
      $(this).addClass('past')
    }

    if (timeColorChange === currentTime){
      $(this).removeClass('past')
      $(this).removeClass('future')
      $(this).addClass('present')
    }

    else {
      $(this).removeClass('present')
      $(this).removeClass('past')
      $(this).addClass('future') }
    }
  )}; 

  // $('#9 .text-Info').val(localStorage.getItem('9'))

  indicateTimeColor();
})


