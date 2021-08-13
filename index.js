
// sets current day on site
let currentUserDay = moment().format("MMM Do, YYYY");
$('#currentDay').text(currentUserDay);

$(document).ready(function() {

// once page loads the save button will be ready to use and save to local storage whatever user inputs
  $('.saveBtn').on('click', function() {
    let scheduleText = $(this).siblings('.description').val();
    let scheduleTime = $(this).parent().attr('id');

    localStorage.setItem(scheduleTime, scheduleText);
  })

// on page start the user's time will be used to determine what color the time blocks are highlighted with
  function indicateTimeColor() {
  let currentTime = moment().hour();
  
  $('.time-block').each(function () {
    let timeColorChange = parseInt($(this).attr('id').split('hour'));

    if (timeColorChange < currentTime){
      $(this).addClass('past')
      // $(this).removeClass('present')
      // $(this).removeClass('future')
    }

    else if (timeColorChange === currentTime){
      $(this).removeClass('past')
      $(this).addClass('present')
      // $(this).removeClass('future')
    }

    else {
      $(this).removeClass('present')
      // $(this).removeClass('future')
      $(this).addClass('future') 
    }
    }
  )}; 

  $('#nine .description').val(localStorage.getItem('nine'))
  $('#ten .description').val(localStorage.getItem('ten'))
  $('#eleven .description').val(localStorage.getItem('eleven'))
  $('#twelve .description').val(localStorage.getItem('twelve'))
  $('#one .description').val(localStorage.getItem('one'))
  $('#two .description').val(localStorage.getItem('two'))
  $('#three .description').val(localStorage.getItem('three'))
  $('#four .description').val(localStorage.getItem('four'))
  $('#five .description').val(localStorage.getItem('five'))

  indicateTimeColor();
})


