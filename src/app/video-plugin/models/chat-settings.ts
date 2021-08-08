export interface ChatSettingsInterface {
	name?: string;
	creatorName: string;
	showEyesOnLogo?: boolean;
	recordingAvailable?: boolean;
	broadcastingAvailable?: boolean;
	locale?: 'en' | 'de';
	urlToLogo?: string;
}

const chatSettingsApiParams = new Map([
	['name', 'name'],
	['creatorName', 'user[name]'],
	['showEyesOnLogo', 'options[show_label]'],
	['recordingAvailable', 'options[recording_available]'],
	['broadcastingAvailable', 'options[broadcast_available]'],
	['locale', 'options[custom_fields][locale]'],
	['urlToLogo', 'options[custom_fields][logo]'],
]);

export class ChatSettings implements ChatSettingsInterface {
	name?: string;
	creatorName = '';
	showEyesOnLogo?: boolean;
	recordingAvailable?: boolean;
	broadcastingAvailable?: boolean;
	locale?: 'en' | 'de';
	urlToLogo?: string;

	constructor(props: ChatSettingsInterface = { creatorName: '' }) {
		for (const prop in props) {
			if (!props.hasOwnProperty(prop)) {
				continue;
			}

			(this as any)[prop as any] = props[prop as keyof ChatSettingsInterface];
		}
	}

	toQueryString() {
		let result = '';
		for (const prop in this) {
			if (!this.hasOwnProperty(prop)) {
				continue;
			}

			const apiParam = chatSettingsApiParams.get(prop);

			if (!apiParam) {
				return;
			}

			result += apiParam + '=' + decodeURIComponent(String(this[prop])) + '&';
		}
		return result.substring(0, result.length - 1);
	}
}
