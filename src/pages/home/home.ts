import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WinnerPage } from '../winner/winner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

scoreTeamA=0;
scoreTeamB=0;
  constructor(public navCtrl: NavController) {

  }
TeamA(value:number):void{
  this.scoreTeamA+=value;
}
TeamB(value:number):void{
  this.scoreTeamB+=value;
}
reset():void{this.scoreTeamA=0;
this.scoreTeamB=0;
}
endMatch():void{this.navCtrl.push(WinnerPage)}
}