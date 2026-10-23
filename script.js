
document.getElementById('tabLogin').onclick = function() {
  document.getElementById('tabLogin').classList.add('active');
  document.getElementById('tabSignup').classList.remove('active');
  document.getElementById('loginPanel').classList.remove('hide');
  document.getElementById('signupPanel').classList.add('hide');
  document.getElementById('signupForm').reset();
}

document.getElementById('tabSignup').onclick = function() {
  document.getElementById('tabSignup').classList.add('active');
  document.getElementById('tabLogin').classList.remove('active');
  document.getElementById('signupPanel').classList.remove('hide');
  document.getElementById('loginPanel').classList.add('hide');
  document.getElementById('loginForm').reset();
}

document.getElementById('loginPwBtn').onclick = function() {
  document.getElementById('loginPwBtn').classList.add('active');
  document.getElementById('loginOtpBtn').classList.remove('active');
  document.getElementById('loginPwWrap').classList.remove('hide');
  document.getElementById('loginOtp').classList.add('hide');
  document.getElementById('loginForgot').classList.remove('hide');
  document.getElementById('loginGetOtp').classList.add('hide');
}

document.getElementById('loginOtpBtn').onclick = function() {
  document.getElementById('loginOtpBtn').classList.add('active');
  document.getElementById('loginPwBtn').classList.remove('active');
  document.getElementById('loginOtp').classList.remove('hide');
  document.getElementById('loginPwWrap').classList.add('hide');
  document.getElementById('loginGetOtp').classList.remove('hide');
  document.getElementById('loginForgot').classList.add('hide');
}

document.getElementById('signupOtpBtn').onclick = function() {
  document.getElementById('signupOtpBtn').classList.add('active');
  document.getElementById('signupPwBtn').classList.remove('active');
  document.getElementById('signupOtp').classList.remove('hide');
  document.getElementById('signupPwWrap').classList.add('hide');
}

document.getElementById('signupPwBtn').onclick = function() {
  document.getElementById('signupPwBtn').classList.add('active');
  document.getElementById('signupOtpBtn').classList.remove('active');
  document.getElementById('signupPwWrap').classList.remove('hide');
  document.getElementById('signupOtp').classList.add('hide');
}

document.getElementById('loginEye').onclick = function() {
  var inp = document.getElementById('loginPw');
  var icon = this.querySelector('i');
  if (inp.type == 'password') {
    inp.type = 'text';
    icon.className = 'fa-regular fa-eye-slash';
  } else {
    inp.type = 'password';
    icon.className = 'fa-regular fa-eye';
  }
}

document.getElementById('signupEye').onclick = function() {
  var inp = document.getElementById('signupPw');
  var icon = this.querySelector('i');
  if (inp.type == 'password') {
    inp.type = 'text';
    icon.className = 'fa-regular fa-eye-slash';
  } else {
    inp.type = 'password';
    icon.className = 'fa-regular fa-eye';
  }
}

document.getElementById('loginForm').onsubmit = function(e) {
  e.preventDefault();
  alert('Login Successful!');
  this.reset();
}

document.getElementById('signupForm').onsubmit = function(e) {
  e.preventDefault();
  alert('Register Successful!');
  this.reset();
}
