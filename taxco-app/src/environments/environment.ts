// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCn8R5ojJ4IXqwpBseAR2tbiQoF4D3pev4",
      authDomain: "taxco-app.firebaseapp.com",
      databaseURL: "https://taxco-app.firebaseio.com",
      projectId: "taxco-app",
      storageBucket: "taxco-app.appspot.com",
      messagingSenderId: "3588211874"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
