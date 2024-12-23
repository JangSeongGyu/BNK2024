import { Box, Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { CurrentState } from '../recoil/GameSelector';
import boxImage from '../../images/box.png';
import paperImage from '../../images/paper.jpg';
import { useMemo } from 'react';
const Prize = () => {
	const current = useRecoilValue(CurrentState);
	const display = useMemo(() => {
		return current.includes('prize');
	}, [current]);

	const paperDisplay = useMemo(() => {
		return current.includes('paper');
	}, [current]);

	const animation = useMemo(() => {
		if (current == "prize_animation"){
			return "prizeMove 2s linear infinite"
		}
		return "none"
	}, [current]);

	return <>
		{display && <Box component={'img'} src={boxImage} sx={{animation:animation}} />}
	 	{ paperDisplay && 
		<Box 
		sx={{
			display:"flex",
			justifyContent:"center",
			alignItems:"center",
			position:"absolute",
			top:0,
			left:0,
			width:"100%",
			height:"100%",
		}}>
			<Box sx={{minWidth:1000, animation:"paperIn 2s linear"}} component={"img"} src={paperImage} />
			{/* <Typography 
				sx={{
				fontSize:60,
				justifyContent:"center",
				alignItems:"center",
				position:"absolute",
				fontFamil:"Yuji Syuku"
				}}>
					テーブルの下を見よ！
			</Typography> */}
		</Box>
		
}
	
	</>;
};
export default Prize;
