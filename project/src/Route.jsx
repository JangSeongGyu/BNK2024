import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import Theme from './Theme';
import Server from './pages/Server';
import Intro from './pages/Intro';
import Client from './pages/Client';
import Game from './pages/Game';
const Router = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={Theme}>
				<CssBaseline />
				<Routes>
					<Route path={`/game`} element={<Game />} />
					<Route path={`/client`} element={<Client />} />
					<Route path={`/*`} element={<Intro />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default Router;
