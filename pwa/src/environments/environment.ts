// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    email : {
      url:'https://formspree.io/f/******'
    }
  },
  application: {
    name: 'Le Cabinet de Curiosités',
    colorTheme: '#083148',
    mainDescription: "club de robotique et stages scientifiques à Angoulême",
    keywords: "Ateliers et stages, robotiques, électroniques, mécanique informatique, club de science, fablab, pédagogie pour les jeunes, Grand-Angoulême, Gond-Pontouvre, Charente",
    author: "Nicolas Clément Makerspot",
    version: "13.2.0",
    developer: "Emmanuel Lefevre"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
