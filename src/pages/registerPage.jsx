import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../CSSModules/registerpage.module.css";
import AuthForm from "../components/AuthForm";
import { USE_DEMO_AUTH, handleRegister as handleRegisterDemo } from "../utility/forTesting";

const RegisterPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleRegister = USE_DEMO_AUTH
        ? (e) => handleRegisterDemo(e, navigate)
        : (e) => {
            e.preventDefault();
            
        };

    const fields = [
        { id: "username", name: "username", type: "text", label: "Username", placeholder: "Enter your username", autoComplete: "username" },
        { id: "email", name: "email", type: "email", label: "Email", placeholder: "Enter your email", autoComplete: "email" },
        { id: "password", name: "password", type: "password", label: "Password", placeholder: "Enter your password", autoComplete: "new-password" }
    ];

    return (
        <div className={styles.registerPage}>
            <h1 className={styles.title}>{t("Register")}</h1>
            <AuthForm
                onSubmit={handleRegister}
                t={t}
                fields={fields}
                buttonLabel="Register"
                linkText="Already have an account?"
                linkTo="/login"
                linkLabel="Login"
            />
        </div>
    );
};

export default RegisterPage;