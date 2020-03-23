import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LottoType } from '../data-type/lotto-type';
import { Lotto } from '../data-type/lotto';
import { MainService } from '../main.service';

@Component({
  selector: 'app-lotto-history',
  templateUrl: './lotto-history.component.html',
  styleUrls: ['./lotto-history.component.css']
})
export class LottoHistoryComponent implements OnInit {

  @Input() lottoTypeList: LottoType[];

  lottoHistoryForm: FormGroup;
  submitted: boolean;
  powerBallNumbers: Lotto[]; // all lotto
  numberList: number[];
  specialBallList: number[];

  constructor(private mainService: MainService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeData();
    this.initializeLottoNumbers();
    this.buildLottoHistoryForm();
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
    });
  }

  buildLottoHistoryForm() {
    this.lottoHistoryForm = this.formBuilder.group({
      dateFrom: new FormControl('', [Validators.required]),
      dateTo: new FormControl('', [Validators.required]),
      selectedLottoType: new FormControl('', [Validators.required])
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

  search() {
    return false;
  }

}
