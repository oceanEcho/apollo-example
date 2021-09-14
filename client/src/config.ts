export const config = {
  api: {
    uri: '',
    externalUri: '',
  },
  init: (): Promise<void | Record<string, unknown>> =>
    fetch(`/environment.json?t=${Date.now()}`, {
      headers: {
        'Cache-Control': 'no-cache',
      },
    })
      .then((response) => response.json())
      .then((data: any) => {
        config.api = data.api;
      }),
};
