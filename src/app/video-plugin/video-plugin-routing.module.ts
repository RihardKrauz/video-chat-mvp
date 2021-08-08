import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPluginContainerComponent } from './video-plugin-container/video-plugin-container.component';
import { RouterModule } from '@angular/router';

const routes = [
	{
		path: '',
		component: VideoPluginContainerComponent,
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})
export class VideoPluginRoutingModule {
}
