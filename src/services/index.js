import axios from "axios";

const api = axios.create({
	baseURL: "https://rickandmortyapi.com/api",
});

export default class Service {
	async listData(endpoint, pageNumber, name = "") {
		const response = await api.get(
			`/${endpoint}?page=${pageNumber}&name=${name}`
		);
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

	async character(ID) {
		const response = await api.get(`/character/${ID}`);
		const getOrigin = await api.get(response.data.origin.url);
		const getLocation = await api.get(response.data.location.url);
		const getEpisodes = response.data.episode;
		const listEpisodes = await Promise.all(
			getEpisodes.map(async (url) => {
				const episode = await api.get(url);
				return episode.data;
			})
		);

		return {
			character: response.data,
			origin: getOrigin.data,
			location: getLocation.data,
			episode: listEpisodes,
		};
	}

	async location(ID) {
		const response = await api.get(`/location/${ID}`);
		const getResidents = response.data.residents;
		const listResidents = await Promise.all(
			getResidents.map(async (url) => {
				const resident = await api.get(url);
				return resident.data;
			})
		);

		return {
			location: response.data,
			residents: listResidents,
		};
	}
}
