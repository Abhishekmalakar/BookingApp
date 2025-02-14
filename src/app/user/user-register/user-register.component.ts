import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerationForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.registerationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
      ]),
    });
  }
  passwordMatchingValidator(): Validators {
    return (fg: FormGroup): Validators | null => {
      const password = fg.get('password')?.value;
      const confirmPassword = fg.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { notmatched: true };
    };
  }
  onSubmit() {
    console.log(this.registerationForm);
  }
}
