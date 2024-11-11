import { Box } from '@mui/material';
import { AlignCenter } from '../GeneralBoxOption';
import { grey } from '@mui/material/colors';
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

const OnLive = ({live}) => {

	const text = useMemo(()=>{
		return live ? 'LIVE' : 'OFFLINE';
	},[live]) 

	const bgcolor = useMemo(()=>{
		return live ? 'red' : 'grey';
	},[live]) 

	return (
		<Box
			sx={{
				...AlignCenter,
				
				fontSize: 18,
				width: 80,
				height: 30,
				borderRadius: 100,
				bgcolor:  bgcolor ,
				color: 'white',
			}}
		>
			{text}
		</Box>
	);
};
export default OnLive;
