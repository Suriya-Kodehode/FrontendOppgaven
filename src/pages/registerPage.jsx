import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../CSSModules/registerpage.module.css";
import AuthForm from "../components/AuthForm.jsx";
import { USE_DEMO_AUTH, handleRegister as handleRegisterDemo } from "../utility/forTesting"; // Import the demo auth utility
import { signupUser } from "../utility/userAPI.jsx";

const RegisterPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    // USE_DEMO_AUTH is for testing signup, login, and logout functionality without a backend.
    const handleRegister = USE_DEMO_AUTH // USE_DEMO_AUTH is currently set to false, so this will not use demo auth
        ? (e) => handleRegisterDemo(e, navigate)
        : async (e) => {
            e.preventDefault();
            const form = e.target;
            const username = form.username.value;
            const email = form.email.value;
            const password = form.password.value;

            try {
                await signupUser({ userName: username, email, password });
                navigate("/login");
            } catch (err) {
                alert(err?.response?.data?.error || "Registration failed");
            }
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