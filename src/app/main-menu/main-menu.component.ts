import { Component } from '@angular/core';

@Component({
  selector: 'main-menu-component',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})

export class MainMenuComponent {
    tabs = [
      { name: 'M E' },
      { name: 'E X P E R I E N C E' },
      { name: 'C O D E' }
    ];
}