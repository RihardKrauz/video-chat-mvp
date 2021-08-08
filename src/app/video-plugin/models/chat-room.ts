export interface ChatRoom {
	access_key?:   string;
	ready?:        boolean;
	locked?:       boolean;
	room?:         Room;
	team?:         Team;
	user?:         User;
	links?:        Links;
	options?:      Options;
	presentation?: null;
	broadcasts?:   any[];
	recording?:    null;
	snapshots?:    any[];
	waiting_list?: any[];
}

export interface Links {
	self?:       string;
	gui?:        string;
	guest_join?: string;
	websocket?:  string;
}

export interface Options {
	show_names?:          boolean;
	show_label?:          boolean;
	exit_url?:            null;
	recording_available?: boolean;
	broadcast_available?: boolean;
	layout_available?:    boolean;
	layout?:              string;
	reaction_available?:  boolean;
	suggest_guest_names?: boolean;
	lock_available?:      boolean;
	kick_available?:      boolean;
	sfu_mode?:            string;
	layout_users?:        null;
	voice_activation?:    boolean;
	custom_fields?:       CustomFields;
}

export interface CustomFields {
}

export interface Room {
	id?:          string;
	name?:        string;
	ready?:       boolean;
	started_at?:  Date;
	shutdown?:    boolean;
	sip?:         RoomSIP;
	guest_token?: string;
}

export interface RoomSIP {
	uri?:               string;
	domain?:            null;
	authorizationUser?: null;
}

export interface Team {
	name?: string;
}

export interface User {
	id?:      string;
	room_id?: string;
	name?:    string;
	avatar?:  null;
	guest?:   boolean;
	blocked?: boolean;
	ready?:   boolean;
	sip?:     UserSIP;
}

export interface UserSIP {
	uri?:               string;
	domain?:            null;
	wsServers?:         string;
	instanceId?:        string;
	userAgentString?:   string;
	authorizationUser?: null;
	displayName?:       string;
	stunServers?:       string[];
	turnServers?:       TurnServer[];
	registerExpires?:   number;
	password?:          string;
}

export interface TurnServer {
	urls?:     string[];
	username?: string;
	password?: string;
}
