import { Box, Typography } from '@mui/material';
import { AlignCenter } from '../GeneralBoxOption';
import { useCallback, useEffect, useMemo, useState } from 'react';
import OnLive from '../components/OnLive';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import ClientSlide from '../components/ClientSlide';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { GameTextState } from '../recoil/GameSelector';
import { SelectData, TextData } from '../components/TextData';

const Client = () => {
	const [answer, setAnswer] = useState(null);
	const [live, setLive] = useState(false);
	const [stage, setStage] = useState(-1);
	const [selectCount, setSelectCount] = useState(0);
	const { client_id } = useParams();

	const gameText = useMemo(() => {
		return TextData(stage);
	}, [stage]);

	const SelectText = useCallback(() => {
		const data = SelectData(stage);
		return Object.keys(data).map((key) => {
			return <Typography sx={{ fontSize: 18, color: 'white' }}>{data[key]}</Typography>;
		});
	}, [stage]);

	useEffect(() => {
		setInterval(() => {
			axios
				.get(`/stage`)
				.then((res) => {
					setLive(true);
					setStage(res.data[0]);
					setSelectCount(res.data[1]);
				})
				.catch(() => {
					setLive(false);
				});
		}, 1000);
		return () => {
			clearInterval();
		};
	}, []);

	useEffect(() => {
		setAnswer('');
	}, [stage]);

	const ButtonClick = (title) => {
		if (stage == -1) {
			toast.error(`入力出来ません。`);
			return;
		}
		setAnswer(title);
		axios
			.post(`/answer`, { id: client_id, answer: title })
			.then((res) => {
				toast.success(`「${title}」提出完了！`);
			})
			.catch((err) => {
				toast.error(`「${title}」提出失敗！`);
			});
	};

	const SelectButton = ({ title }) => {
		const check = title == answer;
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
			);
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
			<ClientSlide stage={stage} client_id={client_id} />
			<Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1, minHeight: 20 }}>
				<Typography sx={{ color: 'white', fontSize: 20 }}>
					{stage == -1 ? '行動不可' : 'STAGE' + stage}
				</Typography>
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
					borderColor: 'border.main',
				}}
			>
				<Box sx={{ width: '100%', mb: 2 }}>
					<Typography sx={{ fontSize: 18, color: 'white', border: 1, borderColor: 'border.main', p: 1 }}>
						{gameText}
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
					<SelectText />
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
