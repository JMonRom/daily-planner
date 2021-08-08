
// sets current day on site
var currentUserDay = moment().format("MMM Do, YYYY");
$('#currentDay').text(currentUserDay);

$(document).ready(function() {

  $('.saveBtn').on('click', function() {
    let scheduleText = $(this).siblings('.description').val();
    let scheduleTime = $(this).parent().attr('id');

    localStorage.setItem(scheduleTime, scheduleText);
  })

  function indicateTimeColor() {
  let currentTime = moment().hour();
  
  $('.time-block').each(function () {
    let timeColorChange = parseInt($(this).attr('id').split('hour'));

    if (timeColorChange < currentTime){
      $(this).removeClass('future')
      $(this).removeClass('present')
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


