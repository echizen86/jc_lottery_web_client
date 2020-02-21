import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LottoType } from '../data-type/lotto-type';
import { Lotto } from '../data-type/lotto';
import { isNullOrUndefinedOrEmpty } from 'src/app/shared/services/utils.service';
import { MainService } from '../main.service';


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
  submitted: boolean;

  constructor(private formBuilder: FormBuilder, private mainService: MainService) { }

  ngOnInit(): void {
    this.initializingData();
    this.initializingLottoType();

    this.buildInsertLottoForm();
    this.subscribeToFormChanges();
  }

  initializingData() {
    this.submitted = false;
    this.panelOpenState = false;
    this.lottoTypeList = [];
    this.lotto = new Lotto();
  }

  initializingLottoType() {
    this.mainService.getLottoTypes().subscribe(result => {
      this.lottoTypeList = result;
    });
  }

  buildInsertLottoForm() {
    this.insertLottoForm = this.formBuilder.group({
      numberOne: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.pattern('^[0-9]*$')]),
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
      this.lotto.numberOne = null;
      if (this.checkNumber(value)) {
        this.lotto.numberOne = value;
      }
    });

    this.insertLottoForm.get('numberTwo').valueChanges.subscribe(value => {
      this.lotto.numberTwo = null;
      if (this.checkNumber(value)) {
        this.lotto.numberTwo = value;
      }
    });

    this.insertLottoForm.get('numberThree').valueChanges.subscribe(value => {
      this.lotto.numberThree = null;
      if (this.checkNumber(value)) {
        this.lotto.numberThree = value;
      }
    });

    this.insertLottoForm.get('numberFour').valueChanges.subscribe(value => {
      this.lotto.numberFour = null;
      if (this.checkNumber(value)) {
        this.lotto.numberFour = value;
      }
    });

    this.insertLottoForm.get('numberFive').valueChanges.subscribe(value => {
      this.lotto.numberFive = null;
      if (this.checkNumber(value)) {
        this.lotto.numberFive = value;
      }
    });

    this.insertLottoForm.get('specialBall').valueChanges.subscribe(value => {
      this.lotto.specialBall = null;
      if (this.checkSpecialBall(value)) {
        this.lotto.specialBall = value;
      }
    });
  }

  checkNumber(numberLotto: number) {
    return numberLotto > 0 && numberLotto < 70;
  }

  checkSpecialBall(specialBall: number) {
    return specialBall > 0 && specialBall < 27;
  }

  insertLotto() {
    this.submitted = true;
    if  (this.insertLottoForm.valid) {
      this.mainService.insertLottoNumber(this.lotto).subscribe(result => {
        console.log('lotto inserted', result);
        // handle an event to update the lotto numbers list in parent
      });
    }
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
