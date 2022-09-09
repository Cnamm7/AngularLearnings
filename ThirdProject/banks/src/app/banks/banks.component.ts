import { Component, OnInit } from '@angular/core';
import { Bank } from '../bank';
import { Banks } from '../banks';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {
  banks = Banks;
  selectedBank: Bank;

  constructor() { this.selectedBank = {id: 0, name: "", website: ""};}

  onSelect(bank: Bank): void {
    this.selectedBank = bank;
  }

  ngOnInit(): void {
  }

}
