import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	form: FormGroup;
	error: string;
	constructor(private fb: FormBuilder, private authService: AuthService) {}

	ngOnInit(): void {
		this.initializeForm();
	}

	initializeForm(): void {
		this.form = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]],
		});
	}

	onSubmit(): void {
		if (this.form.valid) {
			if (this.authService.login(this.form.value) == 'Error') {
				this.error = 'Invalid email or password';
			}
			this.authService.login(this.form.value);
		}
		return;
	}
}
