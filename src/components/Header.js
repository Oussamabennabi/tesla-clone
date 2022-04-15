import React, { useState,useEffect,useRef } from 'react';
import styled from 'styled-components';
const Header = () => {
	const [hidden, setHidden] = useState(true);

	function handleClick() {
		setHidden((prevState) => !prevState);
	}
	const ref = useRef(null);
	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setHidden(true);
		}
	};
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, []);
	return (
		<Container>
			<a className="Logo" href="#/">
				<img alt="logo" src='/images/logo.svg' />
			</a>
			<LeftLinks>
				<a className='link' href="#/">Model S</a>
				<a className='link' href="#/">Model 3</a>
				<a className='link' href="#/">Model X</a>
				<a className='link' href="#/">Model Y</a>
				<a className='link' href="#/">Solar Roof</a>
				<a className='link' href="#/">Solar Panels</a>
			</LeftLinks>
			<RightLinks>
				<a className='link' href="#/">Shop</a>
				<a className='link' href="#/">Account</a>
			</RightLinks>
			<Menu onClick={handleClick}>
				<span className='link'>Menu</span>
			</Menu>
			<SideBar ref={ref} hidden={hidden}>
				<img alt="close-navbar" onClick={handleClick} src='/images/close_black_24dp.svg' />
				<a href="#/">Model S</a>
				<a href="#/">Model 3</a>
				<a href="#/">Model X</a>
				<a href="#/">Model Y</a>
				<a href="#/">Solar Roof</a>
				<a href="#/">Solar Panels</a>
				<a href="#/">Existing Inventory</a>
				<a href="#/">Used Inventory</a>
				<a href="#/">Trade-In</a>
				<a href="#/">Test Drive</a>
				<a href="#/">Powerwall</a>
				<a href="#/">Commercial Energy</a>
				<a href="#/">Utilities</a>
				<a href="#/">Charging</a>
				<a href="#/">Find Us</a>
				<a href="#/">Support</a>
				<a href="#/">Investor Relations</a>
			</SideBar>
		</Container>
	);
};

export default Header;
const Container = styled.nav`
	position: fixed;
	width: 100%;
	z-index: 10;
	min-height: 6vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: 3rem;

	.link {
		font-weight: bold;
		font-size: 0.9rem;
		transition: all 0.2s ease-in-out;
		padding: 0.5rem 0.8rem;
		border-radius: 0.8rem;
		&:hover {
			background-color: rgba(0, 0, 0, 0.08);
		}
	}
	@media screen and (max-width: 1182px) {
		justify-content: space-between;
	}
`;

const LeftLinks = styled.div`
	margin-left: 8rem;

	@media screen and (max-width: 1182px) {
		display: none;
	}
`;

const RightLinks = styled.div`
	@media screen and (max-width: 1182px) {
		display: none;
	}
`;
const Menu = styled.span`
	padding-left: 0.5rem;
	margin-left: 0.5rem;
	font-weight: bold;
	font-size: 0.9rem;
	cursor: pointer;
`;
const SideBar = styled.aside`
	img {
		position: absolute;
		padding: 0.3rem;
		border-radius: 50%;
		top: 1.8vh;
		right: 5vh;
		transition: all 0.2s ease-in-out;
		cursor: pointer;
		&:hover {
			background-color: rgba(0, 0, 0, 0.1);
		}
	}
	position: fixed;
	min-width: 300px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	top: 0;
	bottom: 0;
	z-index: 11;
	right: 0;
	transform: translateX(${({ hidden }) => (hidden ? '100%' : '0%')});
	transition: all 0.4s ease-in-out;
	background-color: white;
	padding: 5rem 1.5rem;

	a {
		width: 100%;
		border-radius: 0.8rem;
		padding: 0.5rem 0.8rem;
		transition: all 0.2s ease-in-out;
		margin-top: 0.25rem;
		margin-bottom: 0.25rem;
		font-weight: bold;
		&:hover {
			background-color: rgba(0, 0, 0, 0.1);
		}
	}
`;
