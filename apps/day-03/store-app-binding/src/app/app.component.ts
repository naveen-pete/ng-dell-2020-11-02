import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  // external template
  templateUrl: './app.component.html',

  // inline template
  // template: `
  //   <h2>Store App</h2>
  //   <p>(inline template demo)</p>
  // `,
  // '<h2>Store App</h2>' +
  // '<p>(inline template demo)</p>',

  // external stylesheet
  styleUrls: ['./app.component.css']

  // inline stylesheet
  // styles: [
  //   `h2 { 
  //     color: blue 
  //   }`
  // ]
})
export class AppComponent {
  title = 'store-app';
}
