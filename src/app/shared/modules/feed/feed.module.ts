import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed.component';
import { RouterModule, Routes } from '@angular/router';
import { FeedService } from './services/feed.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ErrorMessageModule } from '../errorMesage/errorMesage.module';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule,
		MatCardModule,
		MatButtonModule,
		MatGridListModule,
		ErrorMessageModule,
	],
	declarations: [FeedComponent],
	exports: [FeedComponent],
	providers: [FeedService],
})
export class FeedModule {}
