import { useState } from "react";
import { Link } from "react-router";

import googleLogo from "../../assets/images/google-logo.jpeg";

import AuthLayout from "../../components/auth/AuthLayout";
import FormField from "../../components/auth/FormField";
import PasswordField from "../../components/auth/PasswordField";
import { validateSignUp } from "../../utils/authValidation";

function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateSignUp(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log("Valid sign-up data:", formData);
  }

  return (
    <AuthLayout
      title="Welcome"
      description="Sign up to create your enterprise account, manage operations, and collaborate securely across your digital ecosystem."
    >
      <form
        className="auth-form auth-card"
        onSubmit={handleSubmit}
      >
        <header className="auth-form-header">
          <h2>Sign Up</h2>
          <p>Sign up to create your account</p>
        </header>

        <FormField
          label="Full Name"
          name="fullName"
          type="text"
          placeholder="Enter your name"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />

        <FormField
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <PasswordField
          label="Password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <label className="remember-option">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />

          <span>Remember me</span>
        </label>

        <button className="primary-button" type="submit">
          Sign Up
        </button>

        <div className="auth-separator">
          <span />
          <p>or</p>
          <span />
        </div>

        <button className="google-button" type="button">
  <span>Continue with Google</span>

  <img
    className="google-icon"
    src={googleLogo}
    alt=""
  />
</button>

        <p className="auth-switch-text">
          Already have an account?{" "}
          <Link className="auth-red-link" to="/login">
            Sign In
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default SignUpPage;