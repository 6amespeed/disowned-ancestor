var getSearch = function() {
  return {'searchQuery': $('.search').val()};
}

$( '.update' ).serve("click", {
  container: "#results",
  url: "/results",
  data: getSearch,
  onsuccess: function() {
    $('.search').focus();
  }
});

$( '.search' ).serve("keydown", {
  container: "#results",
  url: "/results",
  data: getSearch
});

// $( ).serve("click");
