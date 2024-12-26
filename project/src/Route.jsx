import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import Theme from './Theme';
import Server from './pages/Server';
import Intro from './pages/Intro';
import Client from './pages/Client';
import Game from './pages/Game';
import Remote from './pages/Remote';
const Router = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={Theme}>
				<CssBaseline />
				<Routes>
					<Route path={`/game`} element={<Game />} />
					<Route path={`/client/:client_id`} element={<Client />} />
					<Route path={`/remote`} element={<Remote />} />
					<Route path={`/*`} element={<Intro />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default Router;
