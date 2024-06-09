import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: 'http://localhost:4000/',
	cache: new InMemoryCache({
		typePolicies: {
			Book: {
				keyFields: ['title'],
				fields: {
					isInReadingList: {
						read(existing = false) {
							return existing;
						},
					},
				},
			},
		},
	}),
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</ThemeProvider>
	</React.StrictMode>
);
