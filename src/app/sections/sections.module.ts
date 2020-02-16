import { NgModule } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [MatExpansionModule, MatFormFieldModule],
  exports: [MatExpansionModule, MatFormFieldModule],
  providers: [],
  bootstrap: []
})
export class SectionsModule {}
