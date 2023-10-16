import { Component } from '@angular/core';
import { StartGameService } from './start-game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dealerApp';

  constructor(public game:StartGameService) {}

buttonWorking(){
  console.log("Button is working")
}

walletConnect(){
  this.game.connectWallet
}

}
