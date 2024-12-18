import { Box, Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { CurrentState } from '../recoil/GameSelector';
import { useEffect, useMemo, useState } from 'react';

import { AlignCenter, HorizonAlignCenter } from '../GeneralBoxOption';
import axios from 'axios';
import { cyan, green, grey, orange, pink, red, teal } from '@mui/material/colors';

const Result = () => {
	const current = useRecoilValue(CurrentState);
	const [resultData, setResultData] = useState([]);

	const [AnswerData, setAnswerData] = useState([]);
	const [display, setDisplay] = useState(false);
	const maxTable = 34;

	useEffect(() => {
		if (current.includes('result')) {
			axios.get(`/result/${current.substring(6, 7)}`).then((res) => {
				setResultData(res.data);
			});
			axios.get(`/result_answer/${current.substring(6, 7)}`).then((res) => {
				console.log(res.data);
				setAnswerData(res.data);
			});
		}
	}, [current]);

	const SelectList = useMemo(() => {
		return resultData.map((data) => {
			return data[0];
		});
	}, [resultData]);

	const visible = useMemo(() => {
		return current.includes('result');
	}, [current]);

	const Card = ({ index }) => {
		console.log(SelectList);
		let bgcolor = 'black';

		if (current.includes('_change')) {
			if (SelectList.includes(index)) {
				bgcolor = 'red';
			} else {
				bgcolor = grey[400];
			}
		}
		return (
			<Box
				sx={{
					...AlignCenter,
					flexDirection: 'column',
					width: 170,
					height: 120,
					bgcolor: bgcolor,
					border: 5,
					borderColor: 'white',
				}}
			>
				<Typography sx={{ fontSize: 26, color: 'white' }}>{index}テーブル</Typography>
				<Typography sx={{ fontSize: 26, color: 'white' }}>
					{AnswerData[index - 1]?.[1] ?? '提出なし'}
				</Typography>
			</Box>
		);
	};

	const Cards = () => {
		let html = [];
		for (let i = 1; i <= maxTable; i++) {
			html.push(<Card index={i} />);
		}
		return html;
	};

	return (
		<>
			{visible && (
				<Box
					onClick={() => {}}
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						position: 'absolute',
						top: 0,
						left: 0,
						gap: 2,
						p: 5,
						width: '100%',
						height: '100%',
						bgcolor: 'rgba(0,0,0,0.1)',
						backdropFilter: 'blur(5px)',
						zIndex: 2000,
					}}
				>
					<Cards />
				</Box>
			)}
		</>
	);
};
export default Result;
