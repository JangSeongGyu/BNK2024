import { BorderColor } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { AlignCenter } from '../GeneralBoxOption';
import ClientBox from '../../images/ClientBox.png';
import { useEffect, useState } from 'react';
import OnLive from '../components/OnLive';
import axios from 'axios';

const Client = () => {
	const [answer, setAnswer] = useState(null);
	const [live, setLive] = useState(true);
	const [stage, setStage] = useState(0);

	useEffect(() => {
		setInterval(() => {
			axios
				.get(`/stage`)
				.then((res) => {
					setLive(true);
					setStage(res.data);
					console.log(res.data);
				})
				.catch(() => {
					setLive(false);
				});
		}, 2000);
		return () => {
			clearInterval();
		};
	}, []);

	const ButtonClick = (title) => {
		setAnswer(title);
		axios.post(`/answer`, { id: 0, answer: title }).then((res) => {});
	};

	const SelectButton = ({ title }) => {
		return (
			<Box
				onClick={() => {
					ButtonClick(title);
				}}
				sx={{
					...AlignCenter,
					width: '100%',
					height: '100%',
					border: 5,
					borderRadius: 5,
					borderColor: 'border.main',
				}}
			>
				<Typography sx={{ fontSize: 80, color: 'white', pb: 2, userSelect: 'none' }}>{title}</Typography>
			</Box>
		);
	};

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', bgcolor: 'black' }}>
			<Box sx={{ display: 'flex', justifyContent: 'space-between',p:1 }}>
				<Typography sx={{ color: 'white', fontSize: 20 }}>STAGE{stage}</Typography>
				<OnLive live={live} />
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					height: '50%',
					width: '100%',
					pt: 8,
					px: 2,
					pb: 2,
				}}
			>
				<Box sx={{ width: '100%', height: '100%' }}>
					<Typography sx={{ fontSize: 20, color: 'white', border: 1, p: 1 }}>
						ここに問題ここに問題ここに問題ここに問題ここに問題ここに問題ここに問題ここに問題ここに問題ここに問題ここに問題ここに問題ここに問題
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'end',
						width: '100%',
						height: '100%',
					}}
				>
					<Typography sx={{ fontSize: 20, color: 'white' }}>A : 答えA</Typography>
					<Typography sx={{ fontSize: 20, color: 'white' }}>B : 答えB</Typography>
					<Typography sx={{ fontSize: 20, color: 'white' }}>C : 答えC</Typography>
					<Typography sx={{ fontSize: 20, color: 'white' }}>D : 答えD</Typography>
				</Box>
			</Box>
			<Box
				sx={{ display: 'flex', flexDirection: 'column', height: '50%', gap: 2, boxSizing: 'border-box', p: 2 }}
			>
				<Box sx={{ display: 'flex', width: '100%', height: '100%', gap: 2 }}>
					<SelectButton title={'A'} />
					<SelectButton title={'B'} />
				</Box>
				<Box sx={{ display: 'flex', width: '100%', height: '100%', gap: 2 }}>
					<SelectButton title={'C'} />
					<SelectButton title={'D'} />
				</Box>
			</Box>
		</Box>
	);
};
export default Client;
