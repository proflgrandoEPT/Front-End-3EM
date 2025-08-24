if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then((registration) => {
        console.log("Service Worker registrado com sucesso:", registration);

        // Detecta novas versões do SW
        registration.onupdatefound = () => {
          const newWorker = registration.installing;
          newWorker.onstatechange = () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              console.log("Nova versão disponível! Atualize a página para usar.");
            }
          };
        };
      })
      .catch((error) => {
        console.log("Falha no registro do Service Worker:", error);
      });
  });
}