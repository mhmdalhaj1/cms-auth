import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email address"),

  password: yup
    .string()
    .required("Password is required"),
});

export const signUpSchema = yup.object({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(3, "Full name must contain at least 3 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email address"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must contain at least 8 characters")
    .matches(
      /[A-Z]/,
      "Password must contain at least one uppercase letter"
    )
    .matches(
      /[0-9]/,
      "Password must contain at least one number"
    )
    .matches(
      /[!@#$%^&*]/,
      "Password must contain at least one special character"
    ),

  rememberMe: yup.boolean(),
});