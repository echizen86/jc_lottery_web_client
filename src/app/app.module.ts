import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MainComponent } from './sections/main/main.component';
import { InsertLottoComponent } from './sections/main/insert-lotto/insert-lotto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionsModule } from './sections/sections.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContainerComponent } from './sections/main/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InsertLottoComponent,
    MainComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SectionsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
