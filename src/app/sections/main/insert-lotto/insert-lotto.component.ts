import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-insert-lotto',
  templateUrl: './insert-lotto.component.html',
  styleUrls: ['./insert-lotto.component.css']
})
export class InsertLottoComponent implements OnInit {
  panelOpenState;

  constructor() {}

  ngOnInit(): void {
    this.panelOpenState = false;
  }
}
