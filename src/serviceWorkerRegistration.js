import { toast } from 'react-toastify'

const checkEvery = 33 /* seconds */
const isLocalhost = Boolean(window.location.hostname === 'localhost');

export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      var swUrl = '/service-worker.js';

      if (!isLocalhost) {
        navigator.serviceWorker.register(swUrl).then((registration) => {
          registration.update();
          setInterval(() => { registration.update() }, checkEvery * 1000);
          if (registration.waiting) { registration.waiting.postMessage({ type: 'SKIP_WAITING' }) }
          registration.onupdatefound = () => {

            const installingWorker = registration.installing;

            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'activated') {
                toast.info('App will refresh in a few seconds.', { toastId: "PWAVersionUpdate" });
                setTimeout(() => { window.location.reload() }, 3 * 1000);
              }
            };

          };
        })
          .catch((error) => {
            console.error('Error during service worker registration:', error);
          });
      }
    });
  }
}

