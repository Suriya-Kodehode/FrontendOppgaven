import styles from "../CSSModules/loginpage.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AuthForm from "../components/AuthForm";
import { USE_DEMO_AUTH, handleLogin as handleLoginDemo } from "../utility/forTesting";

const LoginPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleLogin = USE_DEMO_AUTH
        ? (e) => handleLoginDemo(e, navigate)
        : (e) => {
            e.preventDefault();
            
        };

    const fields = [
        { id: "username", name: "username", type: "text", label: "Username", placeholder: "Enter your username", autoComplete: "username" },
        { id: "password", name: "password", type: "password", label: "Password", placeholder: "Enter your password", autoComplete: "current-password" }
    ];

    return (
        <div className={styles.loginPage}>
            <h1 className={styles.title}>{t("Login")}</h1>
            <AuthForm
                onSubmit={handleLogin}
                t={t}
                fields={fields}
                buttonLabel="Login"
                linkText="Don't have an account?"
                linkTo="/register"
                linkLabel="Register"
            />
        </div>
    );
};

export default LoginPage;