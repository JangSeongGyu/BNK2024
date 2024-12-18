import { Box, Typography } from '@mui/material';
import { AlignCenter } from '../GeneralBoxOption';
import { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import ClientSlide from '../components/ClientSlide';
import { useParams } from 'react-router-dom';
import { SelectData, TextData } from '../components/TextData';
import SubjectClient from '../components/SubjectClient';
import SelectButton from '../components/SelectButton';

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

	const Buttons = () => {
		const data = SelectData(stage);
		return Object.keys(data).map((key) => {
			return <SelectButton title={key} answer={answer} setAnswer={setAnswer} />;
		});
	};

	return (
		<>
			<Box
				sx={{
					display: stage === -1 ? 'none' : 'flex',
					flexDirection: 'column',
					width: '100%',
					height: '100%',
					bgcolor: 'black',
				}}
			>
				{/* <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
				<Typography sx={{ color: 'white', fontSize: 20 }}>
					{stage == -1 ? '行動不可' : 'STAGE' + stage}
				</Typography>
				<OnLive live={live} />
				</Box> */}

				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						height: '100%',
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
					<SubjectClient stage={stage} />

					<SelectText />
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						p: 1,
						gap: 1,
						boxSizing: 'border-box',
					}}
				>
					<Buttons />
				</Box>
			</Box>
			<ClientSlide stage={stage} client_id={client_id} />
		</>
	);
};
export default Client;
