
const googleSignInButton=document.querySelector('.g-signin2');


function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

  // location.href="album.html";

}



window.onLoadCallback = function(){
  gapi.auth2.init({
      client_id: '15995344385-4bht6p5l1m00icu35emfnrbd6pug7uld.apps.googleusercontent.com'
    });
}

