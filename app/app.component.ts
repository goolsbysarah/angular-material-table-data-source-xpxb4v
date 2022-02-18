import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
  displayedColumns = ['date', 'title', 'entry'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
}

export interface Element {
  date: Date;
  title: string;
  entry: string;
}

const ELEMENT_DATA: Element[] = [
  {date: new Date(), title: 'freaked out in store', entry: 'hyperventilating in line at the grocery store'},
  {date: new Date(), title: 'broke up with bf', entry: 'difficult last couple of days, dealing with a breakup that is causing anxiety'},
  {date: new Date(), title: 'whyyyyy', entry: 'just why???'},
  {date: new Date(), title: 'struggling with self worth', entry: 'anxiety over my appearance and feeling judged'},
  {date: new Date(), title: 'used 54321', entry:'method worked!! helped me calm down and reconnect with where i am'},
  {date: new Date(), title: 'loving the breathing feature', entry: 'helped calm me down when i was panicking'},

];