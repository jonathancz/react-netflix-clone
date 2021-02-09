import axios from 'axios'

/** base url to make request to the movie database */
const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3'
})

// Essentially what it's doing is appending the instance to the base URL
// instance.get('/foo-bar');
// https://api.themoviedb.org/3/foo-bar

export default instance