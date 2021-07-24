var plannerContent = [];
// sets current day on site
var currentUserDay = moment().format("MMM Do, YYYY");
$('#currentDay').text(currentUserDay)

// $('button').on('click', function() {
//   preventDefault();

//   var container = $(this).parent();
//   var plannerText = container.find('input').val();
//   var plannerInput = container.find('input').val();

//   var textInput = {
//     'planner-Text': plannerText,
//     'planner-Info': plannerInput
//   };

//   if (textInput['planner-Text'] !== '') {
//     plannerContent.push(textInput);
//     localStorage.setItem('planner-Events', JSON.stringify(plannerContent))
//   }
// })

$(document).ready(function() {

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
      $(this).addClass('future')
    }}
  )}; 

  $('.saveBtn').on('click', function(){
    let scheduleText = $(this).sibling('.text-Info').val();
    let scheduleTime = $(this).parent().attr('id');

    localStorage.setItem(sheduleTime, scheduleText);
  })

  indicateTimeColor();
})


