import { Component } from '@angular/core';

import { NavController,NavParams } from 'ionic-angular';


@Component({
  selector: 'page-InfoGarage',
  templateUrl: 'InfoGarage.html'
})
export class InfoGarage {
    selectedItem: any;
  
     constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.selectedItem = navParams.get('item');
     }
     
}