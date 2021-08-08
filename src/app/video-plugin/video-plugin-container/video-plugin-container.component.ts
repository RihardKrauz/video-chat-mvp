import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { VideoPluginService } from '../video-plugin.service';
import { shareReplay, startWith, switchMap, tap } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { ChatRoom } from '../models/chat-room';
import { ChatSettings } from '../models/chat-settings';

@Component({
	selector: 'app-video-plugin-container',
	templateUrl: './video-plugin-container.component.html',
	styleUrls: ['./video-plugin-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPluginContainerComponent implements OnDestroy {
	private subs = new Subscription();
	private refreshListSubject = new Subject<void>();

	public loading = {
		rooms: true,
	};

	public userName: string = 'Test user';
	public roomName: string = 'Test room';
	public showEyesOnLogo: boolean = false;
	public recordingAvailable: boolean = false;
	public broadcastingAvailable: boolean = false;
	public locale: 'en' | 'de' = 'de';
	public urlToLogo: string = 'https://evgeniy.climedo.de/en/assets/favicon.png';

	public chatRooms$ = this.refreshListSubject.pipe(
		startWith({}),
		switchMap(() => this.videoPluginService.getChatRooms().pipe(
			tap(() => this.loading.rooms = false),
			shareReplay(1),
		)),
	);

	constructor(
		private readonly videoPluginService: VideoPluginService,
		private readonly cdr: ChangeDetectorRef,
	) {}

	ngOnDestroy() {
		this.subs.unsubscribe();
	}

	public refreshList() {
		this.loading.rooms = true;
		this.refreshListSubject.next();
	}

	public createRoom() {
		if (!this.userName) {
			alert('User name cannot be empty');
			return;
		}

		this.loading.rooms = true;
		this.subs.add(this.videoPluginService.createNewChatRoom(new ChatSettings({
			creatorName: this.userName,
			name: this.roomName,
			showEyesOnLogo: this.showEyesOnLogo,
			recordingAvailable: this.recordingAvailable,
			broadcastingAvailable: this.broadcastingAvailable,
			locale: this.locale,
			urlToLogo: this.urlToLogo,
		}))
		.subscribe(room => {
			this.loading.rooms = false;
			window.open(this.videoPluginService.getEyesOnGuiHref(room), '_blank');
			this.refreshList();
			this.cdr.markForCheck();
		}));
	}

	public clearList() {
		this.loading.rooms = true;
		this.subs.add(this.videoPluginService.clearChatRooms().subscribe(room => {
			this.loading.rooms = false;
			this.refreshList();
			this.cdr.markForCheck();
		}));
	}

	public joinRoom(chatRoom: ChatRoom) {
		window.open(this.videoPluginService.getEyesOnGuestHref(chatRoom), '_blank');
	}
}
