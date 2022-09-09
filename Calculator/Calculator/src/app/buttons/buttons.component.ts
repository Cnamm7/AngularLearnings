import { Component, OnInit } from '@angular/core';
import { Bottons } from '../bottons';
import { FUNCTION_BOTTONS, NUMBER_BOTTONS } from '../calculator-dataset';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  numberButtons = NUMBER_BOTTONS;
  functionButtons = FUNCTION_BOTTONS;
  selectedButton: Bottons = {name: ""};

  constructor() { }

  onSelect(botton: Bottons){
    this.selectedButton = botton;
  }

  ngOnInit(): void {
  }

}
