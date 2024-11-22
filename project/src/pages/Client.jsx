import { BorderColor } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { AlignCenter } from '../GeneralBoxOption';
import ClientBox from '../../images/ClientBox.png';
import { useEffect, useState } from 'react';
import OnLive from '../components/OnLive';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Client = () => {
	const [answer, setAnswer] = useState(null);
	const [live, setLive] = useState(false);
	const [stage, setStage] = useState(0);

	useEffect(() => {
		axios
			.get(`/stage`)
			.then((res) => {
				setLive(true);
				setStage(res.data);
			})
			.catch(() => {
				setLive(false);
			});

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
		}, 1000);
		return () => {
			clearInterval();
		};
	}, []);

	useEffect(()=>{
		setAnswer("")
	},[stage])

	const ButtonClick = (title) => {
		if(stage==0){
			toast.success(`準備中です！`)	
		}
		setAnswer(title);
		axios.post(`/answer`, { id: 0, answer: title }).then((res) => {
			toast.success(`「${title}」提出完了！`)
		});
	};

	const SelectButton = ({ title }) => {
		const check = title == answer
		if (check) {
			return (
				<Box
					sx={{
						...AlignCenter,
						width: '100%',
						height: '100%',
						border: 5,
						borderRadius: 5,
						borderColor: 'red',
					}}
				>
					<Typography sx={{ fontSize: 80, color: 'white', pb: 2, userSelect: 'none' }}>{title}</Typography>
				</Box>
			)
		}
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
			<Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 ,minHeight:20}}>
				<Typography sx={{ color: 'white', fontSize: 20 }}>STAGE{stage}</Typography>
				<OnLive live={live} />
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					height: '50%',
					width: '100%',
					pt: 2,
					px: 2,
					pb: 2,
					borderColor:"border.main"
				}}
			>
				<Box sx={{ width: '100%',mb:2,}}>
					<Typography sx={{ fontSize: 18, color: 'white', border: 1,borderColor:"border.main", p: 1 }}>
						ここに問題ここに問題ここに問題ここに問題ここに問題ここに問題ここに問題ここに問題ここに問題ここに問題ここに問題ここに問題ここに問題
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						width: '100%',
						height: '100%',
					}}
				>
					<Typography sx={{ fontSize: 18, color: 'white' }}>A : 答えA</Typography>
					<Typography sx={{ fontSize: 18, color: 'white' }}>B : 答えB</Typography>
					<Typography sx={{ fontSize: 18, color: 'white' }}>C : 答えC</Typography>
					<Typography sx={{ fontSize: 18, color: 'white' }}>D : 答えD</Typography>
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
