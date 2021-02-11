$("form[name=signInForm]").submit(function(e){

  var $form = $(this);
  var $error= $form.find(".error");
  var data = $form.serializeArray()[0];

console.log(JSON.stringify(data));

  $.ajax({
    url: "http://localhost:5000/api/auth/admin/login",
    type: "POST",
    data: data,
    dataType: "json",
    headers: { 'Access-Control-Allow-Origin': '*' },
    success: function(resp){
      console.log(resp);
      window.location.href="/HomePage.html";
      resp['token'];
    },
    error: function(resp){
      $error.text(resp.responseJSON.error).removeClass("errorhidden"); // this is to select the specified class in quotes
    }
  });

  e.preventDefault();
});


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

//add to every ajax call
//headers: { 'Access-Control-Allow-Origin': '*' };
//for when you need to need to login
/*headers: {
  'Access-Control-Allow-Origin': '*',
  'Authorization': `Bearer ${token}`
},*/
