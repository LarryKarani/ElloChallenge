import React from 'react';
import { Typography, Box } from '@mui/material';

const EmptyState = () => {
	return (
		<Box textAlign='center' mt={4}>
			<Typography variant='h5' color='textSecondary'>
				No books found.
			</Typography>
		</Box>
	);
};

export default EmptyState;