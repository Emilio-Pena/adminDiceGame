import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-status',
  templateUrl: './second-status.component.html',
  styleUrls: ['./second-status.component.css']
})
export class SecondStatusComponent implements OnInit {

  updateGameResult(isWin: boolean) {
    console.log(isWin);

    let gameData = {
      wins: 0,
      losses: 0
    }
    
    if (isWin) {
      gameData.wins++;
    } else {
      gameData.losses++;
    }
  }

  constructor() { }
  ngOnInit(): void {
  }

}
