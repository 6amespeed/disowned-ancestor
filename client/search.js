console.log("sefsf");

// var pjax = require("new-pjax");
// var Pjax = require("pjax");

// new Pjax({
//   // elements: "a", // default is "a[href], form[action]"
//   elements: "a[data-pjax]", // default is "a[href], form[action]"
//   // selectors: ["title", ".my-Header", ".my-Content", ".my-Sidebar"]
//   selectors: [".results"]
// })
// console.log($(document).pjax);
//
//
// $.pjax({url: url, container: '#pjax-container'})

$(document).pjax('a[data-pjax-results]', '#results', {push: false, "pjaxData": $('.search').text()});
// $(document).pjax('a[data-pjax]', '#results', {push: false})


//This should be done always...
//maybe make pjax plugin..
$(document).on('pjax:beforeSend', function(a, b, c) {
  // $('#loading').show()
  console.log(a, b, c);
  b.setRequestHeader("x-pjax-data", c.pjaxData);
});
