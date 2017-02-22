import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-Connexion',
  templateUrl: 'Connexion.html',
})

export class Connexion {

    log = {}  
  
     constructor(public navCtrl: NavController ) {
       
     }

     onSubmit() : void {
       // https://ionicframework.com/docs/v2/resources/forms/
       console.log('test')
     }
}