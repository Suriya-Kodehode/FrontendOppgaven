import { useEffect } from "react";
import { Outlet, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import Header from "./components/Header.jsx"
import BackgroundProvider from './utility/backgroundProvider.jsx'
import "./assets/Languages.jsx";
import './App.css'

function App() {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const routeTitleMap = {
      "/register": t("Register"),
      "/login": t("Login"),
      "/home": t("Home")
    };
    const matchedRoute = Object.keys(routeTitleMap).find((route) => location.pathname.endsWith(route));
    document.title = matchedRoute ? routeTitleMap[matchedRoute] : t("MyWebsite");
  }, [location, t]);

  return (
    <BackgroundProvider>
      <div className='app'>
        <header>
          <Header />
        </header>
        <aside>

        </aside>
        <main>
          <Outlet />
        </main>
        <footer>

        </footer>
      </div>
    </BackgroundProvider>
  )
}

export default App
