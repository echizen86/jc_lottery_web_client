import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertLottoComponent } from './insert-lotto.component';

describe('InsertLottoComponent', () => {
  let component: InsertLottoComponent;
  let fixture: ComponentFixture<InsertLottoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertLottoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertLottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
