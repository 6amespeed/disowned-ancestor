$(document).on('click', 'div', function(e) {
  console.log("click");
  $.ajax({
    url: '/results',
    type: 'POST',
    dataType: 'html',
    data: {'someresult': 'search results'}
  }).done(function(data) {
    $('#results').html(data);
  }).fail(function() {
    console.log("Something went wrong!");
  });
});
