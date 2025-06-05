import styles from "../CSSModules/loginpage.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import AuthForm from "../components/AuthForm.jsx";
import { USE_DEMO_AUTH, handleLogin as handleLoginDemo } from "../utility/forTesting";
import { loginUser } from "../utility/userAPI.jsx";
import { setItem } from "../utility/localStorage.jsx";

const LoginPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleLogin = USE_DEMO_AUTH
        ? (e) => handleLoginDemo(e, navigate)
        : async (e) => {
            e.preventDefault();
            if (loading) return;
            setLoading(true);
            const form = e.target;
            const username = form.username.value;
            const password = form.password.value;

            try {
                const data = await loginUser({ identifier: username, password });
                setItem("jwtToken", data.jwtToken);
                setItem("userID", data.userID);
                navigate("/home");
            } catch (err) {
                alert(err?.response?.data?.error || "Login failed");
            } finally {
                setLoading(false);
            }
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
                buttonLabel={loading ? t("Logging in...") : t("Login")}
                linkText="Don't have an account?"
                linkTo="/register"
                linkLabel="Register"
                disabled={loading}
            />
        </div>
    );
};

export default LoginPage;