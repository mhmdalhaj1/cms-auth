import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import googleLogo from "../../assets/images/google-logo.jpeg";
import AuthLayout from "../../components/auth/AuthLayout";
import FormField from "../../components/auth/FormField";
import PasswordField from "../../components/auth/PasswordField";
import { signUpSchema } from "../../schemas/authSchemas";

function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  function onSubmit(data) {
    console.log("Valid sign-up data:", data);

    // Later we can call the signup API here with Axios.
  }

  return (
    <AuthLayout
      title="Welcome"
      description="Sign up to create your enterprise account, manage operations, and collaborate securely across your digital ecosystem."
    >
      <form
        className="auth-form auth-card"
        onSubmit={handleSubmit(onSubmit)}
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
          register={register}
          error={errors.fullName?.message}
        />

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

        <label className="remember-option">
          <input
            type="checkbox"
            {...register("rememberMe")}
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
            alt="Google"
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