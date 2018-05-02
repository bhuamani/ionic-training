import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalleinicioPage } from '../detalleinicio/detalleinicio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goDetalle(){
    this.navCtrl.push(DetalleinicioPage);
  }

}
