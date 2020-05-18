import axios from "axios";

//set base url
axios.defaults.baseURL = "https://inkognito-server.herokuapp.com/the/v1/vendor";

export const Post = (url, options = {}) =>
	new Promise((resolve, reject) => {
		axios
			.post(url, options)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});

export const Get = (url, options = {}) =>
	new Promise((resolve, reject) => {
		axios
			.get(url)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
	
export const Put = (url, options = {}) =>
	new Promise((resolve, reject) => {
		axios
			.put(url, options)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
