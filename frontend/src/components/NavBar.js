import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import PropTypes from 'prop-types'

const pages = ['All Books', 'My Reading List'];

function ResponsiveAppBar({activePage, setActivePage}) {
	 const [anchorElNav, setAnchorElNav] = React.useState(null);
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleCloseNavMenu = (page) => {
        setActivePage(page)
		setAnchorElNav(null);
	};

	return (
		<AppBar
			position='fixed'
			sx={{
				bgcolor: 'white',
				color: '#5ACCCC',
				boxShadow: 'none',
				'&::after': {
					content: '""',
					display: 'block',
					position: 'absolute',
					bottom: 0,
					left: 0,
					width: '100%',
					height: '1.6px',
					background: 'linear-gradient(to right, #5ACCCC, #FABD33, #CFFAFA)',
				},
			}}
		>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography
						variant='h2'
						noWrap
						component='a'
						href='/'
						color='text.primary'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
							cursor: 'pointer',
							fontSize: '25px',
							flexGrow: 1,
						}}
					>
						Ello
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={() => setAnchorElNav(null)}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
									<Typography textAlign='center' sx={{ color: `${activePage === page ? '#5ACCCC' : '#335C6E'}` }}>
										{page}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant='h5'
						noWrap
						component='div'
						href='#app-bar-with-responsive-menu'
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
							cursor: 'pointer',
						}}
					>
						Ello
					</Typography>
					<Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={() => handleCloseNavMenu(page)}
								sx={{ my: 2, color: `${activePage === page ? '#5ACCCC' : '#335C6E'}`, display: 'block', fontWeight: 700, fontSize: '16px' }}
							>
								{page}
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
ResponsiveAppBar.propTypes = {
	activePage: PropTypes.string,
	setActivePage: PropTypes.func,
};
export default ResponsiveAppBar;
