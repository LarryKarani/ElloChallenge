import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
	query Books {
		books {
			id: title
			author
			coverPhotoURL
			readingLevel
			title
			isInReadingList @client
		}
	}
`;

export const BOOK_FRAGMENT = gql`
	fragment BookFragment on Book {
		title
		isInReadingList
	}
`;
