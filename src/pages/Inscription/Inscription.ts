import { Component } from '@angular/core';

import { NavController,NavParams } from 'ionic-angular';


@Component({
  selector: 'page-Inscription',
  templateUrl: 'Inscription.html',
})

export class Inscription {
    selectedGarage: any;
  
     constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.selectedGarage = navParams.get('garageSel');
     }

     annuler(event){
         this.navCtrl.pop();
     }

}