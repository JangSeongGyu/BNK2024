import { Box, Button, Typography } from '@mui/material';
import { blue, red } from '@mui/material/colors';
import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Remote = () => {
	const Onhandle = (num) => {
		axios.post('/stage', { stage: num, count: 0 }).then((res) => {
			toast.success('stage 変更完了' + num);
		});
	};

	const Closehandle = (e) => {
		axios.post('/stage', { stage: -1, count: 0 }).then((res) => {
			toast.success('stage -1 変更');
		});
	};

	useEffect(() => {
		axios.get('result_answer/0').then((res) => {
			console.log(res.data);
		});
	}, []);
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
			<Box sx={{ display: 'flex', gap: 1 }}>
				{[...Array(8).keys()].map((num) => (
					<Button
						key={num}
						sx={{ bgcolor: blue[100] }}
						id={num}
						onClick={() => {
							Onhandle(num);
						}}
					>
						<Typography sx={{ fontSize: 20 }}>{num}</Typography>
					</Button>
				))}
			</Box>
			<Box sx={{ display: 'flex', gap: 1 }}>
				<Button sx={{ bgcolor: red[100] }} onClick={Closehandle}>
					<Typography sx={{ fontSize: 20 }}>{-1}</Typography>
				</Button>
			</Box>
		</Box>
	);
};
export default Remote;
