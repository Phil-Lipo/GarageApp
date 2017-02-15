import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, SQLite } from 'ionic-native';

import { Accueil } from '../pages/Accueil/Accueil';
import { LstGarage } from '../pages/Lst-garage/LstGarage';
// import { InfoGarage } from '../pages/InfoGarage/InfoGarage';
/*import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';*/

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Accueil;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: Accueil },
       { title: 'Listes des Garages', component: LstGarage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
          SQLite.openDatabase({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLite) => {

        db.executeSql('CREATE TABLE IF NOT EXISTS garages (id INTEGER PRIMARY KEY AUTOINCREMENT, sujet TEXT, descript TEXT, date TEXT', {}).then(() => {}).catch(() => {});

      }).catch(error => console.error('Error opening database', error));
    });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
