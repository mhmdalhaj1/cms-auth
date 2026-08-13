function FormField({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
}) {
  return (
    <div className="form-field">
      <label
        className="form-label"
        htmlFor={name}
      >
        {label}
      </label>

      <input
        className={`form-input ${
          error ? "form-input-error" : ""
        }`}
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />

      {error && (
        <span className="form-error-message">
          {error}
        </span>
      )}
    </div>
  );
}

export default FormField;