'use strict';


// QUERY SELECTOR TO SELECT BUTTONS AND CONTAINER IN A WEB PAGE
const googleSignInButton=document.querySelector('.g-signin2');
const googleSignOutButton=document.querySelector('.sign-out');
const loginScreen=document.querySelector('.container--1');
const logoutScreen=document.querySelector('.container--2')


const userName=document.querySelector('.name');
const email=document.querySelector('.email');
const image=document.querySelector('.image');


logoutScreen.style.display='none';


// BELOW CODE EXECUTES WHEN LOGIN BUTTON PRESSED
function onSignIn(googleUser) {
  const profile = googleUser.getBasicProfile();
  loginScreen.style.display='none';
  logoutScreen.style.display='flex';
  userName.textContent=profile.getName();
  email.textContent=profile.getEmail();
  image.src=profile.getImageUrl()
}


// BELOW FUNCTION EXECUTES WHEN SIGNOUT BUTTON IS PRESSES
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    // console.log('User signed out.');
    loginScreen.style.display='flex';
    logoutScreen.style.display='none';
  });
}


// ADDING EVENT LISTENER FOR SIGNOUT BUTTON
googleSignOutButton.addEventListener('click',signOut);   


// CALLING INIT FUNCTION AFTER LOADING GOOGLE API(defer async loading)
window.onLoadCallback = function(){            
  gapi.auth2.init({
      client_id: '15995344385-4bht6p5l1m00icu35emfnrbd6pug7uld.apps.googleusercontent.com'
    });
}

