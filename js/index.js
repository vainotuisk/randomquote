$(document).ready(function() {
$.ajaxSetup({ cache: false });
   $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
// $("body").append(a[0].content + "<p>&mdash; " + a[0].title + "</p>");
   $(".quote-content").html(a[0].content);
     // Only change code above this line.
     $(".quote-source").html(a[0].title);
   });
   $('#getQuote').on('click', function(e) {
   e.preventDefault();
   $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
 // $("body").append(a[0].content + "<p>&mdash; " + a[0].title + "</p>");
   $(".quote-content").html(a[0].content);
     // Only change code above this line.
     $(".quote-source").html(a[0].title);
   });
 });
});
