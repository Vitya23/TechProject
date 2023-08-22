import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { HeaderModule } from './shared/modules/header/header.module';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { PersistenceService } from './shared/services/persistence.service';
import { GlobalFeedModule } from './globalFeed/globalFeed.module';
import { AuthGuard } from './shared/guards/auth.guard';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		NgxWebstorageModule.forRoot(),
		HeaderModule,
		AuthModule,
	],
	providers: [PersistenceService, AuthGuard],
	bootstrap: [AppComponent],
})
export class AppModule {}
