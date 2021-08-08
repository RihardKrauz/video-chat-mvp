import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const videoPluginApiAccessToken = '610fdc7c2cba7d00138ca2f4';
const eyesOnAccessToken = 'ThXP6J6J1HeMyAQxtDHDqdiC66YZyJfd1Mx4NcSBWm';

@Injectable()
export class VideoPluginApiInterceptor implements HttpInterceptor {

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const modifiedReq = req.clone({
			headers: req.headers
				.set('access-token', videoPluginApiAccessToken)
				.set('Authorization', eyesOnAccessToken),
		});
		return next.handle(modifiedReq);
	}
}
