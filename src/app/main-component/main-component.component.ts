import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponentComponent implements OnInit {
  imgPath = 'assets/';
  computerImgState: string;
  userImgState: string;
  countUserWin = 0;
  countComputerWin = 0;
  computerScore = '';
  userScore = '';
  count = 0;
  addUserTokenValues = [];
  addComputerValues = [];
  winState = 'WON';

  constructor() { }
  Increment(e) {
    console.log(e);
     if (this.count <= 5) {
      this.count++;
      let name = e.target.attributes[0].nodeValue;
      if (name.startsWith('ion')) {
        name = e.path[1].attributes.class.value; // in case the user clicks on the ionic icon
      }  // instead of comparing using id here we use the class attribute !
      this.countCompare(name);
      this.winState  = (this.countUserWin > this.countComputerWin) ? 'WON' : 'LOST';
     } else {
      this.winState  = (this.countUserWin > this.countComputerWin) ? 'WON' : 'LOST';
     }
   }

  NewGame(e) {
    this.countUserWin = 0;
    this.countComputerWin = 0;
    this.count = 0;
    this.addUserTokenValues = [];
    this.addComputerValues = [];
    this.winState = 'WON';
  }

  ComputerChoiceResult(computerChoice) {
    if (computerChoice >= 0 &&  computerChoice <= 0.33) {
        computerChoice = 'rock';
    } else if (computerChoice > 0.33 &&  computerChoice <= 0.66) {
        computerChoice = 'paper';
    } else if (computerChoice > 0.66 &&  computerChoice < 1) {
        computerChoice = 'scissors';
    }
    return computerChoice;
  }

  countCompare(userStringToken) {
    this.addUserTokenValues.push(userStringToken);
    this.userScore = userStringToken;
    // tslint:disable-next-line:prefer-const
    let computerChoice = Math.random();
    // tslint:disable-next-line:prefer-const
    let resultedComputerChoice = this.ComputerChoiceResult(computerChoice);
    this.computerScore  = resultedComputerChoice;
    this.addComputerValues.push(resultedComputerChoice);
        // Game rules
        if ((userStringToken === 'rock' &&  resultedComputerChoice === 'scissors')
        || (userStringToken === 'scissors' &&  resultedComputerChoice === 'paper')
        || (userStringToken === 'paper' &&  resultedComputerChoice === 'rock')) {
          this.countUserWin++;
          this.userImgState = this.imgPath + 'win.png';
          this.computerImgState = this.imgPath + 'lost.png';
    } else if ((resultedComputerChoice === 'rock' &&  userStringToken === 'scissors')
        || (resultedComputerChoice === 'scissors' &&  userStringToken === 'paper')
        || (resultedComputerChoice === 'paper' &&  userStringToken === 'rock')) {
          this.countComputerWin++;
          this.userImgState = this.imgPath + 'lost.png';
          this.computerImgState = this.imgPath + 'win.png';
    }
  }

  DisableButtons(buttons) {
    buttons.forEach(button => {
      button.disabled = true;
    });
  }

ngOnInit() {
}

}
