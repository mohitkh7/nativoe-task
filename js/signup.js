function signup(form){
  var email = form.email.value;
  var password = form.password.value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(user) {
      // user signed up
      var toast_html = 'Successfully Signed Up';
      var toast_class = 'teal';
      M.toast({html: toast_html, classes: toast_class});
      form.reset();
    })
    .catch(function(error) {
      // error in sign up
      var error_code = error.code;
      var error_message = error.message;
      var toast_class = 'red lighten-2';
      if (error_code === 'auth/weak-password') {
          var toast_html = 'Weak Password. Try Again';
      } else {
          var toast_html = error_message;
      }
      M.toast({html: toast_html, classes: toast_class});
    });
  return false;
}