import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamci-table-page',
  templateUrl: './dynamci-table-page.component.html',
  styleUrls: ['./dynamci-table-page.component.scss'],
})
export class DynamciTablePageComponent implements OnInit {
  employees = [
    { firstName: 'Employee', lastName: 'One' },
    { firstName: 'Employee', lastName: 'Two' },
    { firstName: 'Employee', lastName: 'Three' },
    { firstName: 'Employee', lastName: 'Four' },
    { firstName: 'Employee', lastName: 'Five' },
  ];

  inventory = [
    {
      plu: 110,
      supplier: 'X Corp',
      name: 'Table extender',
      inStock: 500,
      price: 50,
      currency: 'GBP',
    },
    {
      plu: 120,
      supplier: 'X Corp',
      name: 'Heated toilet seat',
      inStock: 0,
      price: 80,
      currency: 'GBP',
    },
    {
      plu: 155,
      supplier: 'Y Corp',
      name: 'Really good pencil',
      inStock: 1,
      price: 8000,
      currency: 'AUD',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  purchaseItem(plu: number) {
    console.log('handle purchase for', plu);
  }
}
