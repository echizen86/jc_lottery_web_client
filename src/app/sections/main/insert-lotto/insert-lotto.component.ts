import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LottoType } from '../data-type/lotto-type';
import { Lotto } from '../data-type/lotto';
import { isNullOrUndefinedOrEmpty } from 'src/app/shared/services/utils.service';
import { MainService } from '../main.service';
import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-insert-lotto',
  templateUrl: './insert-lotto.component.html',
  styleUrls: ['./insert-lotto.component.css']
})
export class InsertLottoComponent implements OnInit {

  @Input() lottoTypeList: LottoType[];

  insertLottoForm: FormGroup;
  panelOpenState: boolean;
  lotto: Lotto;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder, private mainService: MainService) { }

  ngOnInit(): void {
    this.initializingData();

    this.buildInsertLottoForm();
    this.subscribeToFormChanges();
  }

  initializingData() {
    this.submitted = false;
    this.panelOpenState = false;
    this.lotto = new Lotto();
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
      console.log(value);
      this.lotto.lottoType = value;
      if (this.disabledInputNumber()) {
        this.cleanInputNumbers();
      }
    });

    this.insertLottoForm.get('numberOne').valueChanges.subscribe(value => {
      this.lotto.numberOne = null;
      if (this.checkNumber(value)) {
        this.lotto.numberOne = value;
      } else {
        this.insertLottoForm.get('numberOne').setErrors({ invalid: true });
      }
    });

    this.insertLottoForm.get('numberTwo').valueChanges.subscribe(value => {
      this.lotto.numberTwo = null;
      if (this.checkNumber(value)) {
        this.lotto.numberTwo = value;
      } else {
        this.insertLottoForm.get('numberTwo').setErrors({ invalid: true });
      }
    });

    this.insertLottoForm.get('numberThree').valueChanges.subscribe(value => {
      this.lotto.numberThree = null;
      if (this.checkNumber(value)) {
        this.lotto.numberThree = value;
      } else {
        this.insertLottoForm.get('numberThree').setErrors({ invalid: true });
      }
    });

    this.insertLottoForm.get('numberFour').valueChanges.subscribe(value => {
      this.lotto.numberFour = null;
      if (this.checkNumber(value)) {
        this.lotto.numberFour = value;
      } else {
        this.insertLottoForm.get('numberFour').setErrors({ invalid: true });
      }
    });

    this.insertLottoForm.get('numberFive').valueChanges.subscribe(value => {
      this.lotto.numberFive = null;
      if (this.checkNumber(value)) {
        this.lotto.numberFive = value;
      } else {
        this.insertLottoForm.get('numberFive').setErrors({ invalid: true });
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
    if (this.lotto.lottoType.lottoType === 'P') {
      return numberLotto > 0 && numberLotto < 70;
    }
    if (this.lotto.lottoType.lottoType === 'M') {
      return numberLotto > 0 && numberLotto < 71;
    }
  }

  checkSpecialBall(specialBall: number) {
    if (this.lotto.lottoType.lottoType === 'P') {
      return specialBall > 0 && specialBall < 27;
    }
    if (this.lotto.lottoType.lottoType === 'M') {
      return specialBall > 0 && specialBall < 26;
    }
  }

  disabledInputNumber() {
    return isNullOrUndefinedOrEmpty(this.lotto.lottoType);
  }

  insertLotto() {
    this.submitted = true;
    if (this.insertLottoForm.valid) {
      this.mainService.insertLottoNumber(this.lotto).subscribe(result => {
        this.cleanForm();
        this.submitted = false;
        // handle an event to update the lotto numbers list in parent
      });
    }
  }

  cleanInputNumbers() {
    this.insertLottoForm.get('numberOne').setValue('');
    this.insertLottoForm.get('numberTwo').setValue('');
    this.insertLottoForm.get('numberThree').setValue('');
    this.insertLottoForm.get('numberFour').setValue('');
    this.insertLottoForm.get('numberFive').setValue('');
    this.insertLottoForm.get('specialBall').setValue('');
  }

  cleanForm() {
    this.insertLottoForm.get('date').setValue('');
    this.insertLottoForm.get('selectedLottoType').setValue('');
    this.insertLottoForm.get('numberOne').setValue('');
    this.insertLottoForm.get('numberTwo').setValue('');
    this.insertLottoForm.get('numberThree').setValue('');
    this.insertLottoForm.get('numberFour').setValue('');
    this.insertLottoForm.get('numberFive').setValue('');
    this.insertLottoForm.get('specialBall').setValue('');
  }

  isPowerball() {
    return isNullOrUndefinedOrEmpty(this.lotto.lottoType) || this.lotto.lottoType.lottoType === 'P';
  }

  isMegaMillions() {
    return !isNullOrUndefinedOrEmpty(this.lotto.lottoType) && this.lotto.lottoType.lottoType === 'M';
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
