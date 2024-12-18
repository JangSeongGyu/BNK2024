import { Box, Typography } from '@mui/material';
import { toast } from 'react-hot-toast';
import { AlignCenter } from '../GeneralBoxOption';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SelectButton = ({ title, answer, setAnswer }) => {
	const { client_id } = useParams();
	const ButtonClick = () => {
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

	const check = title == answer;

	if (check) {
		return (
			<Box
				sx={{
					...AlignCenter,
					width: '46%',
					height: '48%',
					border: 5,
					borderRadius: 1,
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
				width: '46%',
				height: '48%',
				border: 5,
				borderRadius: 1,
				borderColor: 'border.main',
			}}
		>
			<Typography sx={{ fontSize: 80, color: 'white', pb: 2, userSelect: 'none' }}>{title}</Typography>
		</Box>
	);
};
export default SelectButton;
