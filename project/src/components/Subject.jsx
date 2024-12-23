import { Box } from '@mui/material';
import { AlignCenter, HorizonAlignCenter } from '../GeneralBoxOption';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CurrentIndexState } from '../recoil/GameAtom';
import { CurrentState } from '../recoil/GameSelector';
import { useEffect, useMemo, useState } from 'react';

import subject0 from '../../images/subject0.png';
import subject1 from '../../images/subject1.png';
import subject2 from '../../images/subject2.png';
import subject3 from '../../images/subject3.png';
import subject4 from '../../images/subject4.png';
import subject5 from '../../images/subject5.png';
import subject6 from '../../images/subject6.png';

const Subject = ({ stage, type }) => {
	const current = useRecoilValue(CurrentState);
	console.log(current);
	const bg = useMemo(() => {
		if (stage == 0) return subject0;
		else if (stage == 1) return subject1;
		else if (stage == 2) return subject2;
		else if (stage == 3) return subject3;
		else if (stage == 4) return subject4;
		else if (stage == 5) return subject5;
		else if (stage == 6) return subject6;
		else if (stage == 7) return subject6;
		if(current.includes("more")){
			return subject2
		}
	}, [stage,current]);

	const display = useMemo(() => {
		if (current.includes('text') || current.includes('timeout')|| current.includes('more')) {
			if(current == "text7") return false
			return true;
		}
		return false;
	}, [current, type]);

	return (
		<>
			{display && (
				<Box
					sx={{
						...AlignCenter,
						width: '100%',
						height: '100%',
						position: 'absolute',
						overflow: 'hidden',
						p: 2,
						top: 0,
						left: 0,
						zIndex: 100,
						backgroundColor: 'rgba(0,0,0,0.5)',
						backdropFilter: 'blur(6px)',
					}}
				>
					<Box
						sx={{
							maxWidth: '100%',
							height: '100%',
							borderRadius: 2,
							// border: 5,
							bordercolor: 'border.main',
							zIndex: 2000,
							color: 'rgba(255,255,255,0.9)',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundAttachment: 'fixed',
						}}
						component={'img'}
						src={bg}
					/>
				</Box>
			)}
		</>
	);
};
export default Subject;
