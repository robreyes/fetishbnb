$(function() {
	/*easy autocomplete*/
  var data = {
    'csrf_token' : csrf_token
  }
  var options = {
      url: function(phrase) {
        return site_url+'courses'+'/search_categories';
      },
      getValue: function(element) {
        return element.text;
      },
      ajaxSettings: {
        dataType: "JSON",
        method: "POST",
        data: {
          dataType: "json",
        },
      },
      preparePostData: function(data) {
        data.phrase     = $("#search-categories").val();
        data.csrf_token = csrf_token;
        return data;
      },
      template: {
          type: "links",
          fields: {
            link: "link",
          }
      },
      theme: "square",
      cssClasses: "sheroes",
      list: {
        showAnimation: {
          type: "slide",
        },
        hideAnimation: {
          type: "slide"
        }
      },
      requestDelay: 500
  };
  $("#search-categories").easyAutocomplete(options);
})

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).on('load', function() {
  equalheight('.course-detail-wrap');
});
$(window).resize(function(){
  equalheight('.course-detail-wrap');
});


$(window).on('load', function() {
  equalheight('.event-details');
});
$(window).resize(function(){
  equalheight('.event-details');
});

$(window).on('load', function() {
  equalheight('.blog-details');
});
$(window).resize(function(){
  equalheight('.blog-details');
});
$(window).ready(function() {
    // delay by 7 seconds
    setTimeout(function(){
        // make the modal appear
        $('#homeopt-in').modal({
          fadeDuration: 200,
          fadeDelay: 0.50
        });
    }, 3000);
});
$('.close-modal').click(function(){
    // create a cookie
    alert('Closed.');
    //$.cookie('hideTheModal', 'true', { expires: 30 });
});
