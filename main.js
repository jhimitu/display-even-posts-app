//create a small web app where if robin downloads your repo & double clicks one file, he will see EVEN NUMBERED blog posts in the dev tools console

//communicate with server and make a post request
//iterate over JSON data array
//check if the id of each item is even
//if it is, console log it
console.log(7);
$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts",
  type: 'GET',
  data: 'json',
  success: function() {
    console.log('success');
    var data = arguments[0];
    data.forEach(function(item) {
      if (item.id % 2 === 0) {
        console.log(item);
      }
    })
  },

  error: function() {
    console.log('failed');
  }
});
console.log(21);