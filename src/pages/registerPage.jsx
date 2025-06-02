import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../CSSModules/registerpage.module.css";

const RegisterPage = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className={styles.registerPage}>
                <h1 className={styles.title}>{t("Register")}</h1>
                <form className={styles.form}>
                    <div>
                        <label htmlFor="username">{t("Username")}:</label>
                        <input type="text" id="username" name="username" required placeholder={t("Enter your username")}/>
                    </div>
                    <div>
                        <label htmlFor="email">{t("Email")}:</label>
                        <input type="email" id="email" name="email" required placeholder={t("Enter your email")}/>
                    </div>
                    <div>
                        <label htmlFor="password">{t("Password")}:</label>
                        <input type="password" id="password" name="password" required placeholder={t("Enter your password")}/>
                    </div>
                    <button type="submit">{t("Register")}</button>
                </form>
                <div className={styles.loginLink}>
                    {t("Already have an account?")} <Link to="/login">{t("Login")}</Link>
                </div>
            </div>
        </>
    )
}
export default RegisterPage;