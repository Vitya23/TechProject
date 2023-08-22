import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, MatButtonModule],
	declarations: [HeaderComponent],
	exports: [HeaderComponent],
})
export class HeaderModule {}
