import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'klm-frontend';

  hideForm: boolean = false;

  receiveHandleLogonFormData(data:boolean) {
    this.hideForm=data;
  }
  
}
