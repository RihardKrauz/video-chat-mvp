import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthViewComponent } from './auth-view/auth-view.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{
	path: '',
	component: AuthViewComponent
}, {
	path: 'video',
	loadChildren: () => import('./video-plugin/video-plugin.module').then(m => m.VideoPluginModule),
	canLoad: [AuthGuard]
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
