export interface IAdmin {
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

export interface AdminFilters {
	name?: string;
	email?: string;
	phone?: string;
	country?: string;
}
