import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MainComponent } from './sections/main/main.component';
import { InsertLottoComponent } from './sections/main/insert-lotto/insert-lotto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionsModule } from './sections/sections.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InsertLottoComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SectionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
