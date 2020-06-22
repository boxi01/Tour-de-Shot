import { Component, OnInit, Input, Inject, Output, EventEmitter, SimpleChange } from '@angular/core';
import { Local } from '../models/Local';
import { LocalService } from '../services/local.service';
import { WebLocalService } from '../services/web-local.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Subject } from 'rxjs';
import { LocalDetailed } from '../models/LocalDetailed';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() local: LocalDetailed
  summaryProductList: Array<{name: any, price: number, quantity: number}> = [];
  currentCost: number = 0;
  numberValue: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ModalComponent,
              private localService: LocalService)
  { }

  ngOnInit(): void {

  }

  addProductToSummary(product, method: string, i, j){

    this.localService.updateSummaryProductList(product, method, i, j)
    const currenDrinkstArray = this.localService.getSummaryProductListValues();
    let index = currenDrinkstArray.findIndex(x => x.i === i && x.j === j);
    (<HTMLInputElement>document.getElementById("quantity" + i + j)).value = currenDrinkstArray[index].quantity.toString();
    this.currentCost += product.price;


  }

  removeProductFromSummary(product, method: string, i, j){
    console.log(i + '' + j)
    this.localService.updateSummaryProductList(product, method,  i, j);
    const currenDrinkstArray = this.localService.getSummaryProductListValues();
    let index = currenDrinkstArray.findIndex(x => x.i === i && x.j === j);
    (<HTMLInputElement>document.getElementById("quantity" + i + j)).value = currenDrinkstArray[index].quantity.toString();
    this.currentCost -= product.price;
  }

}
