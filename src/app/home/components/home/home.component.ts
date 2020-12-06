import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'pmt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('fileInput')
  fileInput: ElementRef<HTMLInputElement>;

  constructor() { }

  uploadFile(): void {
    const file = this.fileInput.nativeElement.files;
  }

}
