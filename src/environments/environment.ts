// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "Enter Your apiKey Here",
    authDomain: "Enter Your authDomain Here",
    databaseURL: "Enter Your databaseURL Here",
    projectId: "Enter Your projectId Here",
    storageBucket: "Enter Your storageBucket Here",
    messagingSenderId: "Enter Your messagingSenderId Here",
    appId: "Enter Your appId Here",
    measurementId: "Enter Your measurementId Here"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
