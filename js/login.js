function login(form){
  var email = form.email.value;
  var password = form.password.value;
  console.log(email, password);
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(user) {
      // user signed in
      var toast_html = 'Successfully Logged In';
      var toast_class = 'teal';
      M.toast({html: toast_html, classes: toast_class});
      form.reset();
    })
    .catch(function(error) {
      // error in sign in
      var error_code = error.code;
      var error_message = error.message;
      var toast_class = 'red lighten-2';
      if (error_code === 'auth/wrong-password') {
          var toast_html = 'Invalid Username/Password';
      } else {
          var toast_html = error_message;
      }
      console.log(error);
      M.toast({html: toast_html, classes: toast_class});
    });
  return false;
}