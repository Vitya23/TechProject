import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { PostService } from './services/post.service';
import { ErrorMessageModule } from '../shared/modules/errorMesage/errorMesage.module';

const routes: Routes = [
	{
		path: '',
		component: PostComponent,
	},
];

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule.forChild(routes),
		MatCardModule,
		MatButtonModule,
		ErrorMessageModule,
	],
	declarations: [PostComponent],
	providers: [PostService],
})
export class PostModule {}
