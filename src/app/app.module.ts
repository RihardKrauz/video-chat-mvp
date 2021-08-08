import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthViewComponent } from './auth-view/auth-view.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { VideoPluginApiInterceptor } from './video-plugin/video-plugin-api.interceptor';

@NgModule({
	declarations: [
		AppComponent,
		AuthViewComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: VideoPluginApiInterceptor, multi: true },
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
