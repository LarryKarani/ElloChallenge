import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

export default function BookCard({ book, toggleReadingList }) {
	return (
		<Card sx={{ display: 'flex', padding: '25px', flexDirection: { xs: 'column', lg: 'row' }, boxShadow: '0 8px 20px 1px rgba(0,0,0,.05)' }}>
			<CardMedia
				component='img'
				sx={{ width: { lg: 270, xs: '100%'}, height: 200, borderRadius: '8px' }}
				image={book.coverPhotoURL}
				alt='Live from space album cover'
			/>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardContent sx={{ flex: '1 0 auto' }}>
					<Typography component='div' variant='h5' color='primary.stealBlue'>
						{book.title}
					</Typography>
					<Typography variant='subtitle1' color='text.secondary' component='div'>
						{book.author}
					</Typography>
					<Button
						variant='contained'
						sx={{
							marginTop: '30px',
							borderRadius: '12px',
							boxShadow: 'none',
							bgcolor: book.isInReadingList ? 'secondary.orangeRed' : 'primary.main',
							'&:hover': {
								bgcolor: book.isInReadingList ? 'secondary.orangeRed' : 'primary.main',
							},
						}}
						onClick={() => toggleReadingList(book.title, book.isInReadingList)}
					>
						{book.isInReadingList ? 'Remove From Reading List' : 'Add to Reading List'}
					</Button>
				</CardContent>
			</Box>
		</Card>
	);
}

BookCard.propTypes = {
	book: PropTypes.shape({
		author: PropTypes.string,
		coverPhotoURL: PropTypes.string,
		readingLevel: PropTypes.string,
		title: PropTypes.string,
		isInReadingList: PropTypes.bool,
	}),
	toggleReadingList: PropTypes.func,
};
