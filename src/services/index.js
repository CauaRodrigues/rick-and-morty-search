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

	async getEpisodeOrLocation(endpoint, ID) {
		const response = await api.get(`/${endpoint}/${ID}`);
		const getCharacters =
			endpoint === "location"
				? response.data.residents
				: response.data.characters;
		const listCharacters = await Promise.all(
			getCharacters.map(async (url) => {
				const character = await api.get(url);
				return character.data;
			})
		);

		return {
			info: response.data,
			characters: listCharacters,
		};
	}
}
