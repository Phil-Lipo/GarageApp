import { Component } from '@angular/core';

import { NavController,NavParams } from 'ionic-angular';
import { InfoGarage } from '../InfoGarage/InfoGarage';
import { GarageService } from "../../app/garageService";

@Component({
  selector: 'page-LstGarage',
  templateUrl: 'LstGarage.html'
})

export class LstGarage {
  selectedItem: any;
  Gestgarages: GarageService;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Gestgarages = new GarageService();
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.Gestgarages.getGarages();
    this.Gestgarages.addGarage("Angular 2","Tous savoir sur Angular 2...","21/02/2017","flask");
    this.Gestgarages.addGarage("Buzz Sodifrance","Comment faire le buzz pour sodifrance ?","03/03/2017","boat");
    this.Gestgarages.addGarage("Methodes Agile","A la découverte des méthodes Agiles","18/04/2017","bluetooth");
    this.Gestgarages.addGarage("Ionic","Créer une petite application Ionic","25/04/2017","beer");

    
  //   this.garages.push({title: 'Angular 2', descript: 'Tous savoir sur Angular 2...', icon :'flask'});
  //   this.garages.push({title: 'Buzz Sodifrance', descript: 'Comment faire le buzz pour sodifrance ?', icon :'boat'}); 
  //   this.garages.push({title: 'Methodes Agile', descript: 'A la découverte des méthodes Agiles', icon :'bluetooth'}); 
  //   this.garages.push({title: 'Ionic', descript: 'Créer une petite application Ionic', icon :'boat'});
  //   this.garages.push({title: 'Webdesign', descript: 'Venez decouvrir le Webdesign', icon :'beer'}); 


  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!

    // ici faut créer la page InfoGarage qui est la page pour détailler un garage.
    this.navCtrl.push(InfoGarage, {
      garage: item
    });
  }
}