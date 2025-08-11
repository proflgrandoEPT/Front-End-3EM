import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend) // backend para carregar arquivos JSON em public/locales
  .use(LanguageDetector) // detecta idioma do navegador
  .use(initReactI18next) // integra com React
  .init({
    fallbackLng: "pt-BR",
    supportedLngs: ["pt", "pt-BR", "en-US"],
    nonExplicitSupportedLngs: true,
    debug: true, // ativar para ajudar a ver logs no console
    interpolation: {
      escapeValue: false, // React já escapa por padrão
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // caminho dos arquivos de tradução
    },
  });

export default i18n;
