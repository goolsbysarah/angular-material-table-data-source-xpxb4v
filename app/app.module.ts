import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatTableModule,   MatButtonModule,
    MatIconModule,  MatToolbarModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
