import { Component } from '@angular/core';

import { NavController,NavParams } from 'ionic-angular';
import { Inscription } from '../Inscription/Inscription';


@Component({
  selector: 'page-InfoGarage',
  templateUrl: 'InfoGarage.html',
})

export class InfoGarage {
    selectedGarage: any;
  
     constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.selectedGarage = navParams.get('garage');
     }
    test(event) {
       this.navCtrl.push(Inscription, {
         garageSel : this.selectedGarage
        });
    // That's right, we're pushing to ourselves!
    console.log("test ");
    // ici faut créer la page InfoGarage qui est la page pour détailler un garage.
   
  }
}