import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MaterialModule} from './material.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,MaterialModule,BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
