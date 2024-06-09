 # Project Documentation

## Overview

This project is a full-stack application built with React and Material-UI on the frontend, and a GraphQL backend. The project structure is organized as a monorepo with separate folders for the frontend and backend.

- **Frontend:** Located in the `frontend` folder, built using React, Material-UI, and Apollo Client for GraphQL integration.
- **Backend:** Located in the `backend` folder, built using GraphQL.

## Project Structure

```
/project-root
|-- /frontend
|   |-- /src
|   |   |-- components
|   |   |   |-- App.js
|   |   |   |-- ResponsiveAppBar.js
|   |   |   |-- SearchBox.js
|   |   |   |-- MediaControlCard.js
|   |   |   |-- EmptyState.js
|   |   |   |-- LoadingComponent.js
|   |   |-- hooks
|   |   |   |-- useReadingListBooks.js
|   |   |   |-- useSearchBooks.js
|   |   |   |-- usePagination.js
|   |   |-- graphql
|   |   |   |-- queries.js
|   |   |   |-- fragments.js
|   |   |-- index.js
|   |   |-- App.css
|   |-- public
|   |-- package.json
|-- /backend
|   |-- src
|   |-- package.json
|-- package.json
```


## Frontend

### Components

#### `App.js`

The main component that manages the state of the active page, handles queries for books, and includes pagination, search, and reading list functionality.

#### `ResponsiveAppBar.js`

A responsive AppBar component that includes navigation and a menu for smaller screens.

#### `SearchBox.js`

A component for searching books by title.

#### `MediaControlCard.js`

A card component to display book information with options to add/remove from the reading list.

#### `EmptyState.js`

A component to display a message when the book list is empty.

#### `LoadingComponent.js`

A component to display a loading spinner while data is being fetched.

### Hooks

#### `useReadingListBooks.js`

A custom hook that filters and returns books that are in the reading list.

#### `useSearchBooks.js`

A custom hook that filters and returns books based on the search term.

#### `usePagination.js`

A custom hook to manage pagination state and handle loading more books.

### GraphQL

#### `queries.js`

Contains GraphQL queries for fetching books.

```js
import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author
      coverImage
      isInReadingList
    }
  }
`;

export const BOOK_FRAGMENT = gql`
  fragment BookFragment on Book {
    title
    isInReadingList
  }
`;
```
# Usage

## 1. Install Depenancies
```
cd frontend
npm install
```

## 2. Run the Fontend
```
npm start
```

# Backend

The backend is built using GraphQL and contains the necessary schemas and resolvers to support the frontend operations.

## Usage

## 1. Install dependencies:
```
cd backend
npm install
```

## 2. Run the backend:
```
npm start
```



