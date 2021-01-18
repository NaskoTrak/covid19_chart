import React from 'react';

const Footer = () => {
	return (
		<div className="copyrightContainer">
			<div className="copyrightFooter">
				&copy; {new Date().getFullYear()} Copyright:{' '}
				<a href="https://github.com/NaskoTrak"> NaskoTrak </a>
			</div>
		</div>
	);
};

export default Footer;
