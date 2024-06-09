import React, { useState } from 'react';
import { useQuery, useApolloClient } from '@apollo/client';
import { Container, Box, Typography, Grid, Button } from '@mui/material';
import ResponsiveAppBar from './components/NavBar';
import SearchBox from './components/SearchBox';
import BookCard from './components/BookCard';
import { GET_BOOKS, BOOK_FRAGMENT } from './queries';
import { useReadingListBooks, useSearchBooks, usePagination } from './hooks';
import EmptyState from './components/Empty'
import LoadingComponent from './components/Loading';

export default function App() {
	const [activePage, setActivePage] = useState('All Books');
    const [searchTerm, setSearchTerm] = useState('');
	const client = useApolloClient();

	const { loading: allBooksLoading, error: allBooksError, data: allBooksData } = useQuery(GET_BOOKS);
	const { readingListBooks, loading: readingListLoading } = useReadingListBooks();
    const { searchedBooks } = useSearchBooks(searchTerm);
    const { booksPerPage, loadMore } = usePagination();

	const toggleReadingList = (bookTitle, isInReadingList) => {
		client.writeFragment({
			id: client.cache.identify({ __typename: 'Book', title: bookTitle }),
			fragment: BOOK_FRAGMENT,
			data: {
				isInReadingList: !isInReadingList,
			},
		});
	};

	if (activePage === 'My Reading List' && readingListLoading) return ;
	if (allBooksLoading || readingListLoading) return <LoadingComponent />;
	if (allBooksError) return <p>Error: {allBooksError.message}</p>;

     let booksToDisplay = [];
    if (activePage === 'My Reading List') {
        booksToDisplay = readingListBooks.slice(0, booksPerPage);
    } else if (searchTerm) {
        booksToDisplay = searchedBooks.slice(0, booksPerPage);
    } else {
        booksToDisplay = allBooksData.books.slice(0, booksPerPage);
    }
	return (
		<>
			<ResponsiveAppBar activePage={activePage} setActivePage={setActivePage} />
			<Container maxWidth='lg' sx={{ marginTop: '164px' }}>
				{activePage !== 'My Reading List' && (
					<Box sx={{ my: 4 }}>
						<Box sx={{ maxWidth: '400px', marginLeft: 'auto' }}>
							<SearchBox setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
						</Box>
					</Box>
				)}

				<Typography variant='h6' color='text.primary' sx={{ fontWeight: 700, color: 'primary.stealBlue', marginBottom: '30px', fontSize: '30px' }}>
					{activePage}
				</Typography>
				{booksToDisplay.length < 1 ? (
					<EmptyState />
				) : (
					<Grid container spacing={2}>
						{booksToDisplay.map((book, index) => (
							<Grid item xs={12} sm={6} key={index}>
								<BookCard book={book} toggleReadingList={toggleReadingList} />
							</Grid>
						))}
					</Grid>
				)}

				{/* <Box sx={{zIndex: 0,backgroundColor: '#f9fafb',height: 'auto',position: 'absolute',top: '305px',bottom: '0',left: '0',right:'0'}}></Box> */}
				{booksPerPage < (activePage === 'My Reading List' ? readingListBooks.length : searchTerm ? searchedBooks.length : allBooksData.books.length) && (
					<Button
						variant='text'
						onClick={loadMore}
						sx={{
							margin: '10px auto',
							display: 'flex',
							fontSize: '18px',
							fontWeight: 700,
							flexDirection: 'column',
							alignItems: 'center',
							'&:hover': { color: 'text.secondary' },
						}}
					>
						Load More
					</Button>
				)}
			</Container>
		</>
	);
}
