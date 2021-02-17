/**********************FETCH API FUNCTIONS*****************/

 function login(url){
  var $form = document.getElementsByName('SignInForm');
  var $error= document.getElementsByClassName(".error");
  var data = convertToDataObject($form.serializeArray());

  const response = fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'include',

    headers: {
      'Content-Type':'appilcation/json',
      'Access-Control-Allow-Origin': '*'
    },
    redirect: "HomePage.html",
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  }).then(
    (data) => console.log(data.json())

  ).catch((error) => console.log(error));
  return response.json();
}

////////////////////////////////////////////////

function SignUp(url){
 var $form = document.getElementsByName('SignUpForm');
 var $error= $form.find(".error");
 var data = convertToDataObject( $form.serializeArray());

 const response = fetch(url, {
   method: 'POST',
   mode: 'cors',
   cache: 'no-cache',
   credentials: 'include',

   headers: {
     'Content-Type':'appilcation/json',
     'Access-Control-Allow-Origin': '*'
   },
   redirect: "/HomePage.html",
   referrerPolicy: 'no-referrer',
   body: JSON.stringify(data)
 }).then(
   (data) => console.log(data.json())

 ).catch((error) => console.log(error));
 return response.json();
}

////////////////////////////////////////////////

function forgotPassword(url){
 var $form = document.getElementsByName('forgotPassword');
 var $error= document.getElementsByClassName(".error");
 var data = convertToDataObject($form.serializeArray());

 const response = fetch(url, {
   method: 'POST',
   mode: 'cors',
   cache: 'no-cache',
   credentials: 'include',

   headers: {
     'Content-Type':'appilcation/json',
     'Access-Control-Allow-Origin': '*'
   },
   redirect: "/NewPasswordSet.html",
   referrerPolicy: 'no-referrer',
   body: JSON.stringify(data)
 }).then(
   (data) => console.log(data.json())

 ).catch((error) => console.log(error));
 return response.json();
}

////////////////////////////////////////////////

function save(url){
 var $form = document.getElementsByName('adminSettings');
 var $error= document.getElementsByClassName(".error");
 var data = convertToDataObject($form.serializeArray());

 const response = fetch(url, {
   method: 'PUT',
   mode: 'cors',
   cache: 'no-cache',
   credentials: 'include',

   headers: {
     'Content-Type':'appilcation/json',
     'Access-Control-Allow-Origin': '*'
     'Authorization': `Bearer ${token}`
   },
   redirect: "/AccountSettings.html",
   referrerPolicy: 'no-referrer',
   body: JSON.stringify(data)
 }).then(
   (data) => console.log(data.json())

 ).catch((error) => console.log(error));
 return response.json();
}

////////////////////////////////////////////////

function contactUs(url){
 var $form = document.getElementsByName('contactUs');
 var $error= document.getElementsByClassName(".error");
 var data = convertToDataObject($form.serializeArray());

 const response = fetch(url, {
   method: 'PUT',
   mode: 'cors',
   cache: 'no-cache',
   credentials: 'include',

   headers: {
     'Content-Type':'appilcation/json',
     'Access-Control-Allow-Origin': '*'
     'Authorization': `Bearer ${token}`
   },
   redirect: "/AccountSettings.html",
   referrerPolicy: 'no-referrer',
   body: JSON.stringify(data)
 }).then(
   (data) => console.log(data.json())

 ).catch((error) => console.log(error));
 return response.json();
}

///////////////////////////////////////////////

function convertToDataObject(formData) {
  var result = {};

  formData.forEach((e) => {
    result[e['name']] = e['value'];
  });

  return result;
}

/**************************AJAX FUNCTIONS**************************/

/* $("form[name=signInForm]").on('submit', function(e){

  var $form = $(this);
  var $error= $form.find(".error");
  var data = convertToDataObject( $form.serializeArray());

  var data = JSON.stringify($form.serializeArray()[0]);

  // let data = {
  //   'email': 'orange@gmail.com',
  //   'password': 'tomato'
  // };

  let response = fetch('http://localhost:5000/api/auth/admin/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(data),
  }).then(response => {
    let result = response.json();
    alert('Request finished')
    console.log(result);
  });

  e.preventDefault();
  return false;

/* console.log(JSON.stringify(data));
//
//   $.ajax({
//     url: "http://localhost:5000/api/auth/admin/login",
//     type: "POST",
//     data: data,
//     dataType: "json",
//     headers: { 'Access-Control-Allow-Origin': '*' },
//     success: function(resp){
//       console.log(resp);
//       window.location.href="/HomePage.html";
//       resp['token'];
//     },
//     error: function(resp){
//       $error.text(resp.responseJSON.error).removeClass("errorhidden"); // this is to select the specified class in quotes
//     }
//   });
//
//   e.preventDefault();
});

function convertToDataObject(formData) {
  var result = {};


  formData.forEach((e) => {
    result[e['name']] = e['value'];
  });

  return result;
}


$("form[name=signUpForm]").submit(function(e){

  var $form = $(this);
  var $error=$form.find(".error");
  var data = $form.serializeArray()[0];

  $.ajax({
    url: "http://localhost:5000/api/auth/admin/signup",
    type: "POST",
    data: data,
    dataType: "json",
    headers: { 'Access-Control-Allow-Origin': '*' },
    success: function(resp){
      window.location.href="/HomePage.html";
      resp['token'];
    },
    error: function(resp){
      $error.text(resp.responseJSON.error).removeClass("errorhidden"); // this is to select the specified class in quotes
    }
  });

  e.preventDefault();
});

$("form[forgotPassword]").submit(function(e){

  var $form = $(this);
  var $error = $form.find(".error");
  var data = $form.serializeArray()[0];

  $.ajax({
    url: "http://localhost:5000/api/auth/admin/forgot",
    type: "POST",
    data: data,
    dataType: "json",
    headers: { 'Access-Control-Allow-Origin': '*' },
    success: function(resp){
      window.location.href="/NewPasswordSet.html";
      resp['token'];
    },
    error: function(resp){
      $error.text(resp.responseJSON.error).removeClass("errorhidden");
    }
  });

  e.preventDefault();
});

$("form[contactUs]").submit(function(e){

  var $form = $(this);
  var $error = $form.find(".error");
  var data = $form.serializeArray[0];

  $.ajax({
    url: "http://localhost:5000/api/auth/admin/forgot",
    type:"POST",
    data: data,
    dataType:"json",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${token}`
    },
    success: function(resp){
    },
    error: function(resp){
      $error.text(resp.responseJSON.error).removeClass("errorhidden");
    }
  });

e.preventDefault();
});

/*add to every ajax call
//headers: { 'Access-Control-Allow-Origin': '*' };
//for when you need to need to login
headers: {
  'Access-Control-Allow-Origin': '*',
  'Authorization': `Bearer ${token}`
},*/
