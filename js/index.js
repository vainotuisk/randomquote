$(document).ready(function() {
  var quote;
  var author;
$.ajaxSetup({ cache: false });
   $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
   quote = a[0].content.replace(/<\/?[^>]+>/gi, '');
    author= a[0].title.replace(/<\/?[^>]+>/gi, '');
     console.log('tsitaat on: '+quote);
     console.log('autor on: '+author);
     $(".quote-content").html(quote);
     $(".quote-source").html(author);
   });
   $('#getQuote').on('click', function(e) {
   e.preventDefault();
   $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
     quote = a[0].content.replace(/<\/?[^>]+>/gi, '');
    author= a[0].title.replace(/<\/?[^>]+>/gi, '');
   $(".quote-content").html(quote);
     $(".quote-source").html(author);
   });

 });
  $('#shareTwitter').on('click', function(e) {
   e.preventDefault();
   console.log("Nupuvajutuds");
    window.open('https://twitter.com/intent/tweet?text='+quote +' - ('+ author+')');

 });
});
