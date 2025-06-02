import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const translations = {
    en: {
        translation: {
            Register: "Register",
            Login: "Login",
            Home: "Home",
            Username: "Username",
            Email: "Email",
            Password: "Password",
            "Don't have an account?": "Don't have an account?",
            "Already have an account?": "Already have an account?",
            "Enter your username": "Enter your username",
            "Enter your email": "Enter your email",
            "Enter your password": "Enter your password",
            "MyWebsite": "MyWebsite",
            "Welcome to Our Website": "Welcome to Our Website",
            "This is the home page where you can find the latest updates and news.": "This is the home page where you can find the latest updates and news."
        }
    },
    no: {
        translation: {
            Register: "Registrer",
            Login: "Logg inn",
            Home: "Hjem",
            Username: "Brukernavn",
            Email: "E-post",
            Password: "Passord",
            "Don't have an account?": "Har du ikke en konto?",
            "Already have an account?": "Har du allerede en konto?",
            "Enter your username": "Skriv inn brukernavnet ditt",
            "Enter your email": "Skriv inn e-posten din",
            "Enter your password": "Skriv inn passordet ditt",
            "MyWebsite": "MinNettsted",
            "Welcome to Our Website": "Velkommen til vårt nettsted",
            "This is the home page where you can find the latest updates and news.": "Dette er hjemmesiden hvor du kan finne de siste oppdateringene og nyhetene."
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources: translations,
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });
export default i18n;