$(document).ready(function() {
  $('.signin-btn').click(function() {
    var username = $(".username-input").val();
    var password = $(".password-input").val();

    // Checking for blank fields
    if ( username === '' && password === '' ) {
      $('.username-input, .password-input').css({'border': '2px solid red', 'box-shadow': '0 0 3px red'});
      alert('Please, fill in the username and password');
    } else if ( username !== '' && password !== '' ) {
      $('.username-input, .password-input').css({'border': '2px solid green', 'box-shadow': '0 0 3px green'});
    }
  });
});
