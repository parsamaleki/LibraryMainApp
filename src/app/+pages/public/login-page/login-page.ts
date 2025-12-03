import { Component, ViewChild, ElementRef,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [CommonModule,
            FormsModule,
            MatCardModule,
            MatButtonModule,
            MatFormFieldModule,
            MatInputModule,
            MatIconModule
          ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {

  username = ''; 
  password = ''; 

  hasPassword = false;

  merged = false;
  loginError = '';

  @ViewChild('passwordInput', { read: ElementRef }) passwordInput?: ElementRef<HTMLInputElement>;
login: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onUsernameChange(value: string) {
    this.username = value ?? '';

    if (!this.username || this.username.trim() === '') {
      this.hasPassword = false;
      this.merged = false;
      this.password = '';
    }
  }

  onContinue() {
    if (!this.username || this.username.trim() === '') {
      return;
    }

    this.hasPassword = true;
    this.merged = true;

    setTimeout(() => {
      try {
        this.passwordInput?.nativeElement?.focus();
      } catch (e) {
      }
    }, 180);
  }

  onAlternate() {
    console.log('alternative sign-in clicked');
  }

  onSubmit() {
    if (!this.hasPassword) { this.onContinue(); return; }

    if (!this.password || this.password.trim() === '') {
      this.loginError = 'رمز عبور را وارد کنید.';
      return;
    }

    if (this.username.trim() === 'admin' && this.password === 'admin') {
      this.loginError = '';
      this.router.navigate(['/home']); 
    }

    this.loginError = 'نام کاربری یا رمز عبور اشتباه است.';
  }


}
