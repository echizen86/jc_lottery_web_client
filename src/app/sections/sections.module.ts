import { NgModule } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatPseudoCheckboxModule, MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { A11yModule } from '@angular/cdk/a11y';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainService } from './main/main.service';
import { InsertLottoComponent } from './main/insert-lotto/insert-lotto.component';
import { MainComponent } from './main/main.component';
import { ContainerComponent } from './main/container/container.component';
import { SharedModule } from '../shared/shared.module';
import { LottoHistoryComponent } from './main/lotto-history/lotto-history.component';

@NgModule({
  declarations: [
    InsertLottoComponent,
    MainComponent,
    ContainerComponent,
    LottoHistoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    A11yModule,
    MatButtonModule,
    MatPseudoCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    MatNativeDateModule,
    MatRippleModule,
    PortalModule,
    ScrollingModule,
  ],
  exports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    A11yModule,
    MatButtonModule,
    MatPseudoCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    MatNativeDateModule,
    MatRippleModule,
    PortalModule,
    ScrollingModule,
    InsertLottoComponent,
    MainComponent,
    ContainerComponent,
    LottoHistoryComponent
  ],
  providers: [MatDatepickerModule],
  bootstrap: []
})
export class SectionsModule { }
