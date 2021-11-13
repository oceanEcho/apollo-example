const API_URL = 'http://localhost:4000/';

module.exports = {
  client: {
    service: {
      name: 'client',
      url: API_URL,
      skipSSLValidation: true,
    },
  },
};
