import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/authSchemas";
import { useState } from "react";
import { loginUser } from "../../services/authService";
import AuthLayout from "../../components/auth/AuthLayout";
import FormField from "../../components/auth/FormField";
import PasswordField from "../../components/auth/PasswordField";

function LoginPage() {

  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  async function onSubmit(data) {
  try {
    setApiError("");

    const response = await loginUser({
      email: data.email,
      password: data.password,
    });

    console.log("Login successful");
    console.log(response.data);

  } catch (error) {
    console.error("Login error:", error);

    setApiError(
      error.response?.data?.error ||
      error.response?.data?.message ||
      "Invalid email or password"
    );
  }
}

  return (
    <AuthLayout
      title="Welcome"
      highlightedText="Back"
      description="Sign in to access your enterprise dashboard, manage operations, and collaborate securely across your digital ecosystem."
    >
      <form
        className="auth-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <header className="auth-form-header">
          <h2>Sign In</h2>
          <p>Enter your credentials to access your account</p>
        </header>

        <FormField
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your email"
          register={register}
          error={errors.email?.message}
        />

        <PasswordField
          label="Password"
          name="password"
          placeholder="Enter your password"
          register={register}
          error={errors.password?.message}
        />

        <div className="auth-options">
  <label className="remember-option">
    <input
      type="checkbox"
      {...register("rememberMe")}
    />

    <span>Remember me</span>
  </label>

  <button
    className="text-button"
    type="button"
  >
    Can’t access my account
  </button>
</div>

{apiError && (
  <p className="form-error-message">
    {apiError}
  </p>
)}

<button
  className="primary-button"
  type="submit"
>
  Sign In
</button>

        <p className="auth-switch-text">
          Don’t have an account?{" "}
          <Link
            className="auth-red-link"
            to="/signup"
          >
            Create an Account
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default LoginPage;