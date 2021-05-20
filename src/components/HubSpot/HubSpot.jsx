export const loadHubSpot = () => {
  const hsl = document.createElement('script');
  hsl.src = 'https://js.hs-scripts.com/9322018.js';
  hsl.async = true;
  hsl.defer = true;
  hsl.id = 'hs-script-loader';
  document.body.appendChild(hsl);
};

export const saveHubSpotContact = (email, name, lastName) => {
  const portal = '9322018';
  const form = 'e4ce8a70-4f01-41d1-8149-7aafe9e9f6fd';
  const url = 'https://api.hsforms.com/submissions/v3/integration/submit/' + portal + '/' + form;
  const hutk = document.cookie.replace(/(?:^|.*;\s*)hubspotutk\s*=\s*([^;]*).*$|^.*$/, '$1');

  const data = {
    fields: [
      { name: 'email', value: email },
      { name: 'firstname', value: name },
      { name: 'lastname', value: lastName },
    ],
    context: {
      hutk: hutk,
      pageUri: window.location.href,
      pageName: document.title,
    },
  };

  const body = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) };
  return fetch(url, body).then((data) => data.json());
};
