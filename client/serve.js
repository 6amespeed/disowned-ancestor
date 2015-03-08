// evName (click, keydown)
// target (.button)
// container (to be replaced with response #response)
// url (route to POST to get html)
// data (function to use to get data for the POST, can also provide an object if it is a constant)
// onstart (function to be executed when the event occurs)
// onsuccess (function to be executed when the POST response is received successfully)
// onerror (function to be executed if the POST fails)
// waiting state class (to be applied to button while we wait for a response)
(function( $ ) {

  $.fn.serve = function(evName, options) {
    options = options || {};
    target = this.attr("data-serve-target") || options.target || this.selector;
    container = this.attr("data-serve-container") || options.container || this;
    url = this.attr("data-serve-url") || options.url || "/";
    onstart = options.onstart || function(){};
    onsuccess = options.onsuccess || function(){};
    onerror = options.onerror || function(){};;
    waitCls = options.waitCls || "";
    if(typeof(options.data)==='function'){
      console.log("function!");
      // data = options.data();
      data = options.data;
    } else {
      console.log("object!");
      data = function(){return options.data || {}};
    }
    console.log("on: ", evName, " target ", target);
    $(document).on(evName, target, function(ev) {
      if(evName==='keydown'){
        if(ev.which!==13){
          return true;
        } else {
          ev.preventDefault();
        }
      }
      $(target).addClass(waitCls);
      onstart.call(ev);

      $.ajax({
        url: url,
        type: 'POST',
        dataType: 'html',
        data: data()
      }).done(function(data) {
        $(container).html(data);
        $(target).removeClass(waitCls);
        onsuccess.call(data);
      }).fail(function() {
        console.log("Something went wrong!");
        onerror.call(data);
      });
    });

    return this;
  };

}( jQuery ));
