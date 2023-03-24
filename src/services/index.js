import axios from "axios";

const api = axios.create({
	baseURL: "https://rickandmortyapi.com/api/character",
});

export default class Service {
	async listCharacters(pageNumber) {
		const response = await api.get(`?page=${pageNumber}`);
		return response;
	}
}
