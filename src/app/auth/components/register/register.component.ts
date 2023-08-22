import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	form: FormGroup;

	constructor(private fb: FormBuilder, private authService: AuthService) {}

	ngOnInit(): void {
		this.initializeForm();
	}

	initializeForm(): void {
		this.form = this.fb.group({
			username: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]],
		});
	}

	onSubmit(): void {
		if (this.form.valid) {
			this.authService.register(this.form.value);
		}
		return;
	}
}
