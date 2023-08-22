import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './components/errorMessage.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	imports: [CommonModule, MatFormFieldModule, MatButtonModule],
	declarations: [ErrorMessageComponent],
	exports: [ErrorMessageComponent],
})
export class ErrorMessageModule {}
