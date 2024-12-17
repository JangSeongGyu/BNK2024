import { Box } from '@mui/material';
import { AlignCenter, HorizonAlignCenter } from '../GeneralBoxOption';

import { useEffect, useMemo, useState } from 'react';

import subject0 from '../../images/subject0.png';
import subject1 from '../../images/subject1.png';
import subject2 from '../../images/subject2.png';

const SubjectClient = ({ stage, type }) => {
	const bg = useMemo(() => {
		if (stage == 0) return subject0;
		else if (stage == 1) return subject1;
		else if (stage == 2) return subject2;
	}, [stage]);

	return (
		<Box
			sx={{
				maxWidth: '100%',
				maxHeight: 200,
				borderRadius: 2,
				borderColor: 'border.main',
				color: 'rgba(255,255,255,0.9)',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed',
			}}
			component={'img'}
			src={bg}
		/>
	);
};
export default SubjectClient;
