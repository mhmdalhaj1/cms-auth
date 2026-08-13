import { useState } from "react";

function PasswordField({
  label,
  name,
  placeholder,
  register,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  function handleTogglePassword() {
    setShowPassword((currentValue) => !currentValue);
  }

  return (
    <div className="form-field">
      <label
        className="form-label"
        htmlFor={name}
      >
        {label}
      </label>

      <div className="password-input-wrapper">
        <input
          className={`form-input password-input ${
            error ? "form-input-error" : ""
          }`}
          id={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          {...register(name)}
        />

        <button
          className="password-toggle"
          type="button"
          onClick={handleTogglePassword}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      {error && (
        <span className="form-error-message">
          {error}
        </span>
      )}
    </div>
  );
}

export default PasswordField;