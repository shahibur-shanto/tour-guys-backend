export interface Itours {
	title: string;
	description: string;
	city: string;
	country: string;
	transportation: string;
	duration: Number;
	price: Number;
	photo: string;
	gallerys?: {
		gallery?: string[];
	};
}
