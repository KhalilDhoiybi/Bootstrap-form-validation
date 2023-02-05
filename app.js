// Form Elements
var fName = document.getElementById("fName");
var lName = document.getElementById("lName");
var birthDate = document.getElementById("dateOfBirth");
var email = document.getElementById("email");
var password = document.getElementById("password");
var cPassword = document.getElementById("cPassword");
var rules = document.getElementById("rules");

// Sign Up Btn element
var signBtn = document.getElementById("signBtn");

// Elements States
var elementStates = {
  fName: false,
  lName: false,
  birthDate: false,
  email: false,
  password: false,
  cPassword: false,
  rules: false,
};

// Form Data
var formData = {
  fName: "",
  lName: "",
  birthDate: "",
  email: "",
  password: "",
};

// Check States Funcrion
function checkStates() {
  if (
    elementStates.fName &&
    elementStates.lName &&
    elementStates.birthDate &&
    elementStates.email &&
    elementStates.password &&
    elementStates.cPassword &&
    elementStates.rules
  ) {
    return false;
  } else {
    return true;
  }
}

// Check Email Function
function checkEmail(emailValue) {
  return String(emailValue)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// Check Name Function
function checkName(name) {
  return String(name).match(/^[a-zA-Z]+$/);
}

// Calculate Age Function
function calculateAge(date) {
  let currentDate = new Date();
  let dateOfBirth = new Date(date);
  let diffrenceDate = currentDate - dateOfBirth;
  return Math.floor(diffrenceDate / 31557600000);
}

// Valid & Invanlid Functions
function validate(element) {
  element.classList.remove("is-invalid");
  element.classList.add("is-valid");
}
function invalidate(element) {
  element.classList.remove("is-valid");
  element.classList.add("is-invalid");
}

// Form Validation
function formValidation() {
  signBtn.disabled = checkStates();
}

// First Name Validation
function fNameValidation() {
  if (!fName.value) {
    document.getElementById("fNameFeedback").innerHTML =
      "Please enter your first name.";
    invalidate(fName);
    elementStates.fName = false;
  } else if (!checkName(fName.value)) {
    document.getElementById("fNameFeedback").innerHTML =
      "Please enter a valid first name.";
    invalidate(fName);
    elementStates.fName = false;
  } else {
    validate(fName);
    elementStates.fName = true;
  }
}

// Last Name Validation
function lNameValidation() {
  if (!lName.value) {
    document.getElementById("lNameFeedback").innerHTML =
      "Please enter your last name.";
    invalidate(lName);
    elementStates.lName = false;
  } else if (!checkName(lName.value)) {
    document.getElementById("lNameFeedback").innerHTML =
      "Please enter a valid last name.";
    invalidate(lName);
    elementStates.lName = false;
  } else {
    validate(lName);
    elementStates.lName = true;
  }
}

// Date Of Birth Validation
function brithDateValidation() {
  if (!birthDate.value) {
    document.getElementById("dateOfBirthFeedback").innerHTML =
      "Please enter your date of birth.";
    invalidate(birthDate);
    elementStates.birthDate = false;
  } else if (calculateAge(birthDate.value) < 16) {
    document.getElementById("dateOfBirthFeedback").innerHTML =
      "You must be at least 16 years old to sign up.";
    invalidate(birthDate);
    elementStates.birthDate = false;
  } else {
    validate(birthDate);
    elementStates.birthDate = true;
  }
}

// Email Validation
function emailValidation() {
  if (!checkEmail(email.value)) {
    invalidate(email);
    elementStates.email = false;
  } else {
    validate(email);
    elementStates.email = true;
  }
}

// Password Validation
function passwordValidation() {
  if (!password.value) {
    document.getElementById("passwordFeedback").innerHTML =
      "Please enter your password.";
    invalidate(password);
    elementStates.password = false;
  } else if (password.value.length < 6) {
    document.getElementById("passwordFeedback").innerHTML =
      "Too short password.";
    invalidate(password);
    elementStates.password = false;
  } else {
    validate(password);
    elementStates.password = true;
  }
}

// Confirm Password Validation
function cPasswordValidation() {
  if (cPassword.value != password.value) {
    invalidate(cPassword);
    elementStates.cPassword = false;
  } else {
    validate(cPassword);
    elementStates.cPassword = true;
  }
}

// Terms And Rules Validation
function rulesValidation() {
  if (elementStates.rules) {
    invalidate(rules);
    elementStates.rules = false;
  } else {
    validate(rules);
    elementStates.rules = true;
  }
}

function signUp() {
  formData.fName = fName.value;
  formData.lName = lName.value;
  formData.birthDate = birthDate.value;
  formData.email = email.value;
  formData.password = password.value;
  console.log(formData);
}
