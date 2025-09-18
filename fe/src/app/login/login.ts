import { Component } from '@angular/core';
import { LoginComponent } from "./login-component/login-component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}
