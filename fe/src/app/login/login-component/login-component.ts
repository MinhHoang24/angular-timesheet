import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/LoginService';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isFocused: { [key: string]: boolean } = { 'username': false, 'password': false };
  isChecked: boolean = false;

  // constructor(private loginService: LoginService, private router: Router) {}

  isFormValid(): boolean {
    return this.username.trim() !== '' && this.password.trim() !== '' && this.isChecked;
  }

  onFocus(field: string): void {
    this.isFocused[field] = true;
  }

  onBlur(field: string): void {
    this.isFocused[field] = false;
  }

  onParentClick(event: MouseEvent) {
    if (event.target !== document.getElementById('checkbox')) {
      console.log('Parent div clicked');
    }
  }

  onCheckboxClick(event: MouseEvent): void {
    event.stopPropagation();
    this.isChecked = !this.isChecked;
  }

  onLoginClick(event: MouseEvent): void {
    if (!this.isFormValid()) {
      event.preventDefault();
    } else {
      const loginData = {
        userNameOrEmailAddress: this.username,
        password: this.password,
        rememberClient: this.isChecked
      };
      console.log('Login Data:', loginData);

      // this.loginService.login(loginData).subscribe(
      //   response => {
      //     console.log('login successful', response);

      //     if(response.accesToken) {
      //       localStorage.setItem('accessToken', response.accessToken);
      //     }
      //     this.router.navigate(['/']);
      //   },
      //   error => {
      //     console.log('login faile', error);
      //   }
      // );
    }

  }
}