$(document).ready(function() {

   $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
// $("body").append(a[0].content + "<p>&mdash; " + a[0].title + "</p>");
   $(".quote-content").html(a[0].content);
     // Only change code above this line.
     $(".quote-source").html(a[0].title);
   });
   $('#getQuote').on('click', function(e) {
   e.preventDefault();
   $.ajax( {
     url: '/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
     success: function(data) {
       var post = data.shift(); // The data is an array of posts. Grab the first one.
       $('#quote-title').text(post.title);
       $('#quote-content').html(post.content);

       // If the Source is available, use it. Otherwise hide it.
       if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
         $('#quote-source').html('Source:' + post.custom_meta.Source);
       } else {
         $('#quote-source').text('');
       }
     },
     cache: false
   });
 });
});
