import { useState } from "react";
import { Link } from "react-router";
import { validateLogin } from "../../utils/authValidation";

import AuthLayout from "../../components/auth/AuthLayout";
import FormField from "../../components/auth/FormField";
import PasswordField from "../../components/auth/PasswordField";

function LoginPage() {
  const [formData, setFormData] = useState({
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

    const validationErrors = validateLogin(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log("Valid login data:", formData);
  }

  return (
    <AuthLayout
      title="Welcome"
      highlightedText="Back"
      description="Sign in to access your enterprise dashboard, manage operations, and collaborate securely across your digital ecosystem."
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <header className="auth-form-header">
          <h2>Sign In</h2>
          <p>Enter your credentials to access your account</p>
        </header>

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

        <div className="auth-options">
          <label className="remember-option">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />

            <span>Remember me</span>
          </label>

          <button className="text-button" type="button">
            Can’t access my account
          </button>
        </div>

        <button className="primary-button" type="submit">
          Sign In
        </button>

        <p className="auth-switch-text">
          Don’t have an account?{" "}
          <Link className="auth-red-link" to="/signup">
            Create an Account
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default LoginPage;