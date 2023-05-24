import { Component } from '@angular/core';

export interface Details {
 
  name: string;
  position: number;
  weight: number;
  symbol: string;
  }
  

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})


export class SALESComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

}

const ELEMENT_DATA: Details[] = [
  {position: 1, name: 'Beverages', weight: 1065 , symbol: 'H'},
  {position: 2, name: 'Candies', weight: 25, symbol: 'He'},
  {position: 3, name: 'Munchies', weight: 13, symbol: 'Li'},
  {position: 4, name: 'Rolling Paper', weight: 538, symbol: 'Be'},
  {position: 5, name: 'Dairy Products', weight: 784, symbol: 'B'},
  {position: 6, name: 'Vegies', weight: 123, symbol: 'C'},
  {position: 7, name: 'Fruits', weight: 143, symbol: 'N'},
  {position: 8, name: 'Herbs', weight: 65, symbol: 'O'},
  {position: 9, name: 'Cool Drinks', weight: 976, symbol: 'F'},
  {position: 10, name: 'Household', weight: 86, symbol: 'Ne'},
];