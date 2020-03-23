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
  lottoNumbers: Lotto[]; // all lotto
  numberList: number[];
  specialBallList: number[];
  dateFrom: Date;
  dateTo: Date;
  lottoType: LottoType;

  constructor(private mainService: MainService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeData();
    this.buildLottoHistoryForm();
    this.subscribeLottoHistoryForm();
  }

  initializeData() {
    this.submitted = false;
    this.numberList = [];
    this.lottoNumbers = [];
    this.dateFrom = null;
    this.dateTo = null;
  }

  buildLottoHistoryForm() {
    this.lottoHistoryForm = this.formBuilder.group({
      dateFrom: new FormControl(''),
      dateTo: new FormControl(''),
      selectedLottoType: new FormControl('', [Validators.required])
    });
  }

  subscribeLottoHistoryForm() {
    this.lottoHistoryForm.get('dateFrom').valueChanges.subscribe(value => {
      this.dateFrom = value;
    });

    this.lottoHistoryForm.get('dateTo').valueChanges.subscribe(value => {
      this.dateTo = value;
    });

    this.lottoHistoryForm.get('selectedLottoType').valueChanges.subscribe(value => {
      this.lottoType = value;
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
    this.submitted = true;
    if (this.lottoHistoryForm.valid) {
      this.mainService.getLottoNumbers(this.lottoType.lottoType).subscribe(result => {
        console.log(result);
        this.lottoNumbers = result;
      });
    }
    return false;
  }

}
