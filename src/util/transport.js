import axios from "axios";
import {getToken, removeToken} from './storage';

//set base url
axios.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}/api/v1`;


const errorhandler = (error) => {
	if (error.message === 'Network Error') {
		return new Error("Kindly check your internet connection");
	}
	return Promise.reject(error);
};

const successHandler = (response) => {
	return response;
};

const setToken = async (config) => {
	const token = await getToken();
	if (token) {
		config.headers.authorization = `Bearer ${token}`;
	}
	config.headers['Content-Type'] = 'application/json';
	config.headers['Access-Control-Allow-Origin'] = '*';
	return config;
};

axios.interceptors.request.use(
	(config) => setToken(config),
	(error) => Promise.reject(error),
);

axios.interceptors.response.use(
	(response) => successHandler(response),
	(error) => errorhandler(error),
);

const Post = (route, payload) =>
	new Promise(function(resolve, reject) {
		axios.post(route, payload)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});

const Put = (route, payload) =>
	new Promise(function(resolve, reject) {
		axios.put(route, payload)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});

const Get = (route) =>
	new Promise((resolve, reject) => {
		axios.get(route)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});

const Delete = (route) =>
	new Promise((resolve, reject) => {
		axios.delete(route)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});

export {Get, Post, Put, Delete};
