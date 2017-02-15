import { Component } from '@angular/core';

import { NavController,NavParams } from 'ionic-angular';
import { InfoGarage } from '../InfoGarage/InfoGarage';

@Component({
  selector: 'page-LstGarage',
  templateUrl: 'LstGarage.html'
})

export class LstGarage {
  selectedItem: any;
  garages: Array<{title: string, descript: string, icon: string}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.garages= [];
    this.garages.push({title: 'Angular 2', descript: 'Tous savoir sur Angular 2...', icon :'flask'});
    this.garages.push({title: 'Buzz Sodifrance', descript: 'Comment faire le buzz pour sodifrance ?', icon :'boat'}); 
    this.garages.push({title: 'Methodes Agile', descript: 'A la découverte des méthodes Agiles', icon :'bluetooth'}); 
    this.garages.push({title: 'Ionic', descript: 'Créer une petite application Ionic', icon :'boat'});
    this.garages.push({title: 'Webdesign', descript: 'Venez decouvrir le Webdesign', icon :'beer'}); 
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    
    // ici faut créer la page InfoGarage qui est la page pour détailler un garage.
    this.navCtrl.push(InfoGarage, {
      garage: item
    });
  }
}