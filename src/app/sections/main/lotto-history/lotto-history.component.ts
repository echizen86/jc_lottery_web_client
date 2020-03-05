import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LottoType } from '../data-type/lotto-type';

@Component({
  selector: 'app-lotto-history',
  templateUrl: './lotto-history.component.html',
  styleUrls: ['./lotto-history.component.css']
})
export class LottoHistoryComponent implements OnInit {

  @Input() lottoTypeList: LottoType[];
  lottoHistoryForm: FormGroup;
  submitted: boolean;

  constructor() { }

  ngOnInit(): void {
    this.submitted = false;
  }

  search() {
    return false;
  }

}
