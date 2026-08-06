function isEmailValid(email) {
  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}
function containsUppercase(password){
  return /[A-Z]/.test(password);
}
function containSpecialChar(password){
  return /[!@#$%^&*]/.test(password);
}

export function validateLogin(formData) {
  const errors = {};

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!isEmailValid(formData.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!formData.password) {
    errors.password = "Password is required";
  }

  return errors;
}

export function validateSignUp(formData) {
  const errors = {};

  if (!formData.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!isEmailValid(formData.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!formData.password) {
    errors.password = "Password is required";
  } else if (formData.password.length < 8) {
    errors.password =
      "Password must contain at least 8 characters";
  } else if(!containSpecialChar(formData.password)){
    errors.password = "Password must contain special  characters  ex.!@#$%^&*";
  } else if(!containsUppercase(formData.password)){
    errors.password = "Password  must contain Uppercase  character."
  }

  return errors;
}