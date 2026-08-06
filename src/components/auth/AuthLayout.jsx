import "../../styles/auth.css";

function AuthLayout({
    title,
    highlightedText,
    description,
    children,
}){
    return (
        <main  className="auth-page">
            <section className="auth-container">
                <div className="auth-welcome">
                    <h1  className="auth-welcome-title">
                        {title}

                        {highlightedText && (
                            <span  className="auth-highlight">
                                {" "}
                                {highlightedText}
                            </span>
                        )}
                    </h1>
                    <p className="auth-welcome-description">
                        {description}
                    </p>
                </div>
                <div className="auth-form-panel">
                    {children}
                </div>
            </section>
        </main>
    );
}

export default AuthLayout;