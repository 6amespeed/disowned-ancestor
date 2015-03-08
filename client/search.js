$(document).on('click', '.button', function(ev) {
  $(".button").addClass('button-depressed');

  $.ajax({
    url: '/results',
    type: 'POST',
    dataType: 'html',
    data: {'someresult': $('.search').val()}
  }).done(function(data) {
    $('#results').html(data);
    $(".button").removeClass('button-depressed');
  }).fail(function() {
    console.log("Something went wrong!");
  });
});

$(document).on('keydown', '.search', function(ev) {
  if(ev.which!==13){
    return true;
  } else {
    ev.preventDefault();
  }
  $(".button").addClass('button-depressed');

  $.ajax({
    url: '/results',
    type: 'POST',
    dataType: 'html',
    data: {'someresult': $('.search').val()}
  }).done(function(data) {
    $('#results').html(data);
    $(".button").removeClass('button-depressed');
  }).fail(function() {
    console.log("Something went wrong!");
  });
});


// event (click, keydown)
// target (button)
// container (to be replaced with response)
// data
// url
// onstart
// onsuccess
// onerror
// waiting state class (to be applied to button)
