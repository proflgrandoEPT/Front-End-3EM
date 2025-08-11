import React from "react";

import "./App.css";

import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>{t("app.title")}</h1>

        <p>{t("app.subtitle")}</p>
      </header>

      <p className="select-language">{t("app.select_language")}</p>

      <button onClick={() => changeLanguage("pt-BR")}>
        {t("app.portuguese")}
      </button>

      <button onClick={() => changeLanguage("en-US")}>
        {t("app.english")}
      </button>
    </div>
  );
};

export default App;
