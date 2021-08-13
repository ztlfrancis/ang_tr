import { Component } from '@angular/core';
import * as Jsondata from '../assets/MOCK_DATA1.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angtr';
  data: any = (Jsondata as any).default;
}
