import Router from './Route';
import { RecoilRoot } from 'recoil';
import axios from 'axios';
import { useEffect } from 'react';

const App = () => {
	axios.defaults.baseURL = import.meta.env.VITE_DOMAIN;
	axios.defaults.headers.post['Content-Type'] = 'application/json';
	axios.defaults.headers.post['Accept'] = 'application/json';
	axios.defaults.withCredentials = 'true';
	axios.interceptors.request.use(
		function (config) {
			// config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
			return config;
		},
		function (error) {
			// Do something with request error
			return Promise.reject(error);
		}
	);

	return (
		<RecoilRoot>
			<Router />
		</RecoilRoot>
	);
};

export default App;
