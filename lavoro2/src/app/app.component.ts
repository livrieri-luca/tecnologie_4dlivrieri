import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Elenco Utenti</h1>
    <ul>
      <li *ngFor="let user of users">{{ user.name }}</li>
    </ul>
  `
})
export class AppComponent {
  users = [
    { name: 'Marco' },
    { name: 'Giulia' },
    { name: 'Luca' },
    { name: 'Sara' },
    { name: 'Lorenzo' }
  ];
}