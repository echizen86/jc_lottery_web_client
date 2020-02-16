import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LottoType } from '../data-type/lotto-type';
import { Lotto } from '../data-type/lotto';
import { isNullOrUndefinedOrEmpty } from 'src/app/shared/services/utils.service';


@Component({
  selector: 'app-insert-lotto',
  templateUrl: './insert-lotto.component.html',
  styleUrls: ['./insert-lotto.component.css']
})
export class InsertLottoComponent implements OnInit {

  insertLottoForm: FormGroup;
  panelOpenState: boolean;
  lottoTypeList: LottoType[];
  lotto: Lotto;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializingData();
    this.initializingLottoType();

    this.buildInsertLottoForm();
    this.subscribeToFormChanges();
  }

  initializingData() {
    this.panelOpenState = false;
    this.lottoTypeList = [];
    this.lotto = new Lotto();
  }

  initializingLottoType() {
    const powerBall = new LottoType();
    powerBall.lottoType = 'P';
    powerBall.description = 'Power Ball';
    this.lottoTypeList[0] = powerBall;

    const megaMillions = new LottoType();
    megaMillions.lottoType = 'M';
    megaMillions.description = 'Mega Millions';
    this.lottoTypeList[1] = megaMillions;
  }

  buildInsertLottoForm() {
    this.insertLottoForm = this.formBuilder.group({
      numberOne: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      numberTwo: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      numberThree: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      numberFour: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      numberFive: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      specialBall: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      selectedLottoType: new FormControl('', [Validators.required])
    });
  }

  subscribeToFormChanges() {
    this.insertLottoForm.get('date').valueChanges.subscribe(value => {
      this.lotto.date = value;
    });

    this.insertLottoForm.get('selectedLottoType').valueChanges.subscribe(value => {
      this.lotto.lottoType = value;
    });

    this.insertLottoForm.get('numberOne').valueChanges.subscribe(value => {
      this.lotto.numberOne = value;
    });

    this.insertLottoForm.get('numberTwo').valueChanges.subscribe(value => {
      this.lotto.numberTwo = value;
    });

    this.insertLottoForm.get('numberThree').valueChanges.subscribe(value => {
      this.lotto.numberThree = value;
    });

    this.insertLottoForm.get('numberFour').valueChanges.subscribe(value => {
      this.lotto.numberFour = value;
    });

    this.insertLottoForm.get('numberFive').valueChanges.subscribe(value => {
      this.lotto.numberFive = value;
    });

    this.insertLottoForm.get('specialBall').valueChanges.subscribe(value => {
      this.lotto.specialBall = value;
    });
  }

  insertLotto() {
    alert(JSON.stringify(this.lotto));
  }

  getNumberOne() {
    return !isNullOrUndefinedOrEmpty(this.lotto.numberOne) ? this.lotto.numberOne : '';
  }

  getNumberTwo() {
    return !isNullOrUndefinedOrEmpty(this.lotto.numberTwo) ? this.lotto.numberTwo : '';
  }

  getNumberThree() {
    return !isNullOrUndefinedOrEmpty(this.lotto.numberThree) ? this.lotto.numberThree : '';
  }

  getNumberFour() {
    return !isNullOrUndefinedOrEmpty(this.lotto.numberFour) ? this.lotto.numberFour : '';
  }

  getNumberFive() {
    return !isNullOrUndefinedOrEmpty(this.lotto.numberFive) ? this.lotto.numberFive : '';
  }

  getSpecialBall() {
    return !isNullOrUndefinedOrEmpty(this.lotto.specialBall) ? this.lotto.specialBall : '';
  }

}
