import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'My Server', content: 'Just a test!' }, {type: 'server', name: 'Second Server', content: 'Sending rockets on Mars' }];
}
