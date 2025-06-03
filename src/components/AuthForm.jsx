import { Link } from "react-router-dom";
import styles from "../CSSModules/componentCSS/authform.module.css";

const AuthForm = ({
    onSubmit,
    t,
    fields = [],
    buttonLabel,
    linkText,
    linkTo,
    linkLabel
}) => (
    <form className={styles.form} onSubmit={onSubmit}>
        {fields.map(({ id, label, ...inputProps }) => (
            <div key={id} className={styles.formGroup}>
                <label htmlFor={id}>{t(label)}:</label>
                <input id={id} {...inputProps} placeholder={t(inputProps.placeholder)} required />
            </div>
        ))}
        <button type="submit" className={styles.submitButton}>{t(buttonLabel)}</button>
        {linkText && linkTo && linkLabel && (
            <div className={styles.linkRow}>
                {t(linkText)} <Link to={linkTo}>{t(linkLabel)}</Link>
            </div>
        )}
    </form>
);

export default AuthForm;