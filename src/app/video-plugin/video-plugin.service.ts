import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatRoom } from './models/chat-room';
import { map, switchMap } from 'rxjs/operators';
import { ChatSettings, ChatSettingsInterface } from './models/chat-settings';
import { of } from 'rxjs';

const videoPluginApiHost = 'https://krauzsoft-mvp-backend.herokuapp.com';
const eyesOnApiHost = 'https://api.eyeson.team';

@Injectable({
	providedIn: 'root'
})
export class VideoPluginService {

	constructor(private readonly http: HttpClient) {
	}

	getChatRooms() {
		return this.http.get<ChatRoom[]>(`${ videoPluginApiHost }/chat-rooms`);
	}

	createNewChatRoom(settings: ChatSettings) {
		return this.http.post<ChatRoom>(
			`${ eyesOnApiHost }/rooms?${settings.toQueryString()}`,
			null).pipe(
				switchMap(room => this.http.post<ChatRoom[]>(`${ videoPluginApiHost }/chat-rooms`, { item: room })
					.pipe(map(() => room))),
		);
	}

	clearChatRooms() {
		return this.http.post<ChatRoom[]>(`${ videoPluginApiHost }/chat-rooms/clean`, null);
	}

	getEyesOnGuiHref(room: ChatRoom) {
		return room.links?.gui;
	}

	getEyesOnGuestHref(room: ChatRoom) {
		return room.links?.guest_join;
	}
}
