import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPluginContainerComponent } from './video-plugin-container/video-plugin-container.component';
import { VideoPluginRoutingModule } from './video-plugin-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		VideoPluginContainerComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		VideoPluginRoutingModule,
	],
})
export class VideoPluginModule {
}
