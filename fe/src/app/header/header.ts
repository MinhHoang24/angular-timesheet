import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwitchLanguage } from "./switch-language/switch-language";

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, SwitchLanguage, SwitchLanguage],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  
}
