import axios from "axios";

const api = axios.create({
	baseURL: "https://rickandmortyapi.com/api",
});

export default class Service {
	async listCharacters(pageNumber) {
		const response = await api.get(`/character?page=${pageNumber}`);
		return response;
	}

	async listLocations(pageNumber) {
		const response = await api.get(`/location?page=${pageNumber}`);
		return response;
	}

	async listEpisodes(pageNumber) {
		const response = await api.get(`/episode?page=${pageNumber}`);
		return response;
	}

	async listSome(IDs) {
		const { idsCharacters, idsLocations, idsEpisodes } = IDs;

		const characters = await api.get(`/character/${idsCharacters}`);
		const locations = await api.get(`/location/${idsLocations}`);
		const episodes = await api.get(`/episode/${idsEpisodes}`);

		return {
			characters: characters.data,
			locations: locations.data,
			episodes: episodes.data,
		};
	}
}
