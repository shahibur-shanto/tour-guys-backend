export interface IUser {
	username: string;
	password: string;
	email: string;
	role: string;
	country: string;
	phone: string;
	profile?: {
		name?: string;
		age?: number;
		photo?: string;
	};
}

export interface UserFilters {
	name?: string;
	email?: string;
	phone?: string;
	country?: string;
}

export interface UserQueryFilters {
    query?: string; // Single query parameter to search across all fields
}