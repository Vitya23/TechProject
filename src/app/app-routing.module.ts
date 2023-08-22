import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { ErrorMessageComponent } from './shared/modules/errorMesage/components/errorMessage.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
	{
		path: '',
		canActivate: [AuthGuard],
		loadChildren: () => import('./globalFeed/globalFeed.module').then((m) => m.GlobalFeedModule),
		pathMatch: 'full',
	},
	{
		path: 'posts/:id',
		canActivate: [AuthGuard],
		loadChildren: () => import('./post/post.module').then((m) => m.PostModule),
	},
	{
		path: 'register',
		component: RegisterComponent,
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: '**',
		component: ErrorMessageComponent,
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
			anchorScrolling: 'enabled',
			preloadingStrategy: PreloadAllModules,
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
