import { useQuery } from '@apollo/client';
import { useMemo, useState, useEffect } from 'react';
import { GET_BOOKS } from './queries';

export const useReadingListBooks = () => {
	const { data, loading, error } = useQuery(GET_BOOKS);

	const readingListBooks = useMemo(() => {
		if (data && data.books) {
			return data.books.filter((book) => book.isInReadingList);
		}
		return [];
	}, [data]);

	return { readingListBooks, loading, error };
};

export const useSearchBooks = (searchTerm) => {
	const { data, loading, error } = useQuery(GET_BOOKS);
	const [searchedBooks, setSearchedBooks] = useState([]);

	useEffect(() => {
		if (data && data.books) {
			const filteredBooks = data.books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
			setSearchedBooks(filteredBooks);
		}
	}, [data, searchTerm]);

	return { searchedBooks, loading, error };
};

export const usePagination = (initialPerPage = 4) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [booksPerPage, setBooksPerPage] = useState(initialPerPage);

	const nextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const loadMore = () => {
		setBooksPerPage((prevPerPage) => prevPerPage + 4);
	};

	return { currentPage, booksPerPage, nextPage, loadMore };
};
