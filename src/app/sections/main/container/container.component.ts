import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { LottoType } from '../data-type/lotto-type';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  lottoTypeList: LottoType[];

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.initializeData();
    this.initializingLottoType();
  }

  initializeData() {
    this.lottoTypeList = [];
  }

  initializingLottoType() {
    this.mainService.getLottoTypes().subscribe(result => {
      this.lottoTypeList = result;
    });
  }
}
