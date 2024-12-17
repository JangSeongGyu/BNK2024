import { Box, Typography } from '@mui/material';
import { AlignCenter } from '../GeneralBoxOption';

const ClientSlide = ({ stage, client_id }) => {
	const open = stage == -1 ? true : false;
	console.log(stage);
	return (
		<Box
			sx={{
				...AlignCenter,
				flexDirection: 'column',
				position: 'absolute',
				top: 0,
				left: 0,
				gap: 1,
				width: '100%',
				height: '100%',
				bgcolor: 'black',
				transition: 'all 1s ease-in-out',
				opacity: open ? 1 : 0,
				zIndex: open ? 100 : -100,
				pb: 12,
			}}
		>
			<Typography sx={{ color: 'white', fontSize: 60 }}>MIC忘年会</Typography>
			<Typography sx={{ color: 'white', fontSize: 24 }}>-ミズカミクエスト-</Typography>
			<br />
			<Typography sx={{ color: 'white', fontSize: 30 }}>テーブル番号：{client_id}</Typography>
			<Box sx={{ ...AlignCenter, flexDirection: 'column', border: 3, color: 'white', width: '90%', py: 2 }}>
				<Typography sx={{ color: 'white', fontSize: 18 }}>今は操作出来ません。</Typography>
			</Box>
		</Box>
	);
};
export default ClientSlide;
