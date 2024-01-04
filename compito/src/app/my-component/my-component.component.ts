import { Component } from '@angular/core';

@Component({
 selector: 'app-my-component',
 templateUrl: './my-component.component.html',
 styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
 myVar = "Questo è un esempio di variabile!";
 items = ["Elemento 1", "Elemento 2", "Elemento 3"];
}