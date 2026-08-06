import  {useState} from "react";

function PasswordField({
    label,
    name,
    placeholder,
    value,
    onChange,
    error,
}) {
    const [showPassword , setShowPassword] = useState(false);

    function handleTogglePassword(){
        setShowPassword((currentValue) => !currentValue);
    }
    return(
        <div className="form-field">
            <label className="form-label"  htmlFor={name}>
                {label}
            </label>
            <div className="password-input-wrapper">
                <input
                className={`form-input password-input ${
                    error ? "form-input-error" : ""
                }`}
                id={name}
                name={name}
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                />

                <button
                className="password-toggle"
                type="button"
                onClick={handleTogglePassword}>
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