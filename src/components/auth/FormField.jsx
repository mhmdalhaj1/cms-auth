function FormField({
    label,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    error,
}){
    return(
        <div className="form-field">
            <label className="form-label" htmlFor={name}>
                {label}
            </label>
            <input 
            className={`form-input ${
                error  ? "form-input-error" : ""
            }`}
            id={name} 
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            />
            {error &&  (
                <span className="form-error-message">
                    {error}
                </span>
            )}
        </div>
    );
}
export default FormField;