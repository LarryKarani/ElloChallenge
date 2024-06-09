import React from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const SearchBox = ({setSearchTerm, searchTerm}) => {
  return (
			<TextField
				label='Search Book Title'
				onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
				fullWidth
				InputProps={{
					sx: { borderRadius: '8px' },
					endAdornment: (
						<InputAdornment position='start'>
							<IconButton>
								<SearchOutlinedIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		);
}

SearchBox.propTypes = {
	searchTerm: PropTypes.string,
	setSearchTerm: PropTypes.func,
};

export default SearchBox


