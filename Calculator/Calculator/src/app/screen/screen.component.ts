import { Component, Input, OnInit } from '@angular/core';
import { Bottons } from '../bottons';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  @Input() button: Bottons = {name: ""};
  result: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  equal(button: Bottons): number {
    switch(button.name) {
      case "one": {
        return this.result += 1;
      }
      case "two": {
        return this.result += 2;
      }
      case "three": {
        return this.result += 3;
      }
      case "four": {
        return this.result += 4;
      }
      case "five": {
        return this.result += 5;
      }
      case "six": {
        return this.result += 6;
      }
      case "seven": {
        return this.result += 7;
      }
      case "eight": {
        return this.result += 8;
      }
      case "nine": {
        return this.result += 9;
      }
      case "ten": {
        return this.result += 10;
      }
      // case "multiply": {
      //   return this.result + 1;
      // }
      // case "minus": {
      //   return this.result + 1;
      // }
      // case "divide": {
      //   return this.result + 1;
      // }
      // case "plus": {
      //   return this.result + 1;
      // }
      case "equal": {
        return this.result;
      }
      default:
        return this.result
    }

  }

}
