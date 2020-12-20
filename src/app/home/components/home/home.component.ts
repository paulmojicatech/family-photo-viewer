import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpService } from '../../../services/http.service';
@Component({
  selector: 'pmt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('fileInput')
  fileInput: ElementRef<HTMLInputElement>;

  constructor(private _http: HttpService) { }

}
