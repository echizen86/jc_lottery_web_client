import { DateFormatPipe } from './pipes/date-pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DateFormatPipe,
  ],
  exports: [
    DateFormatPipe,
  ],
  providers: [
  ]
})

export class SharedModule {
}
