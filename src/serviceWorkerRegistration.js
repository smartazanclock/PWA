import { toast } from 'react-toastify'

const isLocalhost = Boolean(window.location.hostname === 'localhost');

export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = '/service-worker.js'; 
      if (!isLocalhost) {
        navigator.serviceWorker.register(swUrl).then((registration) => {
          registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (installingWorker) {
              installingWorker.onstatechange = () => {
                if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  toast.info(<div><a href="/">A new version is available! Please click here to update.</a></div>, { toastId: "PWAVersionUpdate", autoClose: false, closeOnClick: false, draggable: false });
                }
              };
            }
          };
        })
          .catch((error) => {
            console.error('Error during service worker registration:', error);
          });
      } else {
        console.log('Running on localhost. SW is not registered.');
      }
    });
  }
}

