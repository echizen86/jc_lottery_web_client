import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Lotto } from '../data-type/lotto';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private mainService: MainService) { }

  powerBallNumbers: Lotto[]; // all lotto
  numberList: number[];
  specialBallList: number[];

  ngOnInit(): void {
    this.initializeData();
    this.initializeLottoNumbers();
  }

  initializeData() {
    this.numberList = [];
    this.powerBallNumbers = [];
    this.powerBallNumbers = [];
  }

  initializeLottoNumbers() {
    this.mainService.getLottoNumbers('P').subscribe(response => {
      this.powerBallNumbers = response;
      this.convertLottoToNumberList(this.powerBallNumbers);
      this.numberList = this.countSortNumbers();
    });
  }

  convertLottoToNumberList(lotto: Lotto[]) {
    if (lotto[0].lottoType.lottoType === 'P') {
      lotto.forEach(result => {
        this.numberList.push(result.numberOne);
        this.numberList.push(result.numberTwo);
        this.numberList.push(result.numberThree);
        this.numberList.push(result.numberFour);
        this.numberList.push(result.numberFive);
      });
    }
  }

  countSortNumbers() {
    const indexNumbers = new Array(70);
    indexNumbers.fill(0);
    for (let i = 0; i < indexNumbers.length; i++) {
      for (let j = 0; j < this.numberList.length; j++) {
        if (i === this.numberList[j]) {
          indexNumbers[i] = indexNumbers[i] + 1;
        }
      }
    }
    return indexNumbers;
  }

  getSortedNumbers() {
    return this.numberList.sort();
  }

}
