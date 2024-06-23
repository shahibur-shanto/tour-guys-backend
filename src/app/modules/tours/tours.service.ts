import Tours from "./tours.model";

export const createToursToDB = async (payload) => {
	const tours = new Tours(payload);
	tours.save();
	return tours;
};
