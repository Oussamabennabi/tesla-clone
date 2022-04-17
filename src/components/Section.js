import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


function Section({
	header,
	text,
	isCar,
	leftBtnText,
	rightBtnText,
	noRightBtn, backgroundImage
}) {
	function handleScrollDown() {

	}
	return (
		<Wrap backgroundImage={backgroundImage}>
			<TextField>
				<Fade top>
					<h1>{header}</h1>
				</Fade>
				<Fade bottom>
					{isCar ? (
						<p>
							Order Online for <span>Touchless Delivery</span>
						</p>
					) : (
						<p>{text} </p>
					)}
				</Fade>
			</TextField>
			<div className="bottom-buttons">
				<ButtonsField className='buttonsField'>
					<Fade left>
						{leftBtnText && <button className="btn-1">{leftBtnText}</button>}
					</Fade>
					<Fade right>
						{rightBtnText && <button className="btn-2">{leftBtnText}</button>}
					</Fade>
				</ButtonsField>
				<NavigationButton>
					<Fade bottom>
						<a href='#'>
							<img alt="expand-more" onClick={handleScrollDown} src='/images/expand_more_black_24dp.svg' />

						</a>
					</Fade>
				</NavigationButton>
			</div>
		</Wrap>
	);
}

export default Section;
const Wrap = styled.div`
	height: 100vh;
	width: 100vw;
	scroll-snap-align: center;
	display: flex;
	justify-content: space-between;
	padding-top: 11rem;
	align-items: center;
	flex-direction: column;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url(${props => `/images/${props.backgroundImage}`});
	.bottom-buttons {
		width: 100%;
	}
		@media screen and (max-width: 600px) {
		justify-content: space-between;
	.bottom-buttons {
	
			margin-bottom: 5rem;
		}

	}
`;
const TextField = styled.div`
	text-align: center;
	width: 100%;
	h1 {
		padding-bottom: 1rem;
		font-size: 2.5rem;
	}
	p span {
		cursor: pointer;
		position: relative;
	}
	p span::before {
		content: '';
		position: absolute;
		width: 100%;
		inset: 0;
		background-color: black;
		top: calc(100% - 1px);
		transition: all 0.2s ease-in-out;
	}
	p span:hover::before {
		top: calc(100% - 2px);
		transform: translateY(2px);
	}
`;
const ButtonsField = styled.div`
	display: flex;
	justify-content: center;
	gap: 1.5rem;
	width: 100%;
	align-items: center;
	button {
		padding: 0.7rem 4rem;
		border: none;
		outline: none;
		border-radius: 1rem;
		opacity: 0.9;
		font-size: 0.7rem;
		cursor: pointer;

		transition: all 0.2s ease-in-out;
	}
	.btn-1 {
		background-color: #393c41;
		color: white;
	}

	.btn-2 {
		background-color: white;
		color: #393c41;
	}
	.btn-1:focus {
		box-shadow: inset 0 2px white, inset 0 -2px white, inset -2px 0 white,
			inset 2px 0 white;
		outline: 2px solid black;
	}
	.btn-2:focus {
		box-shadow: inset 0 2px black, inset 0 -2px black, inset -2px 0 black,
			inset 2px 0 black;
		outline: 2px solid white;
	}
	@media screen and (max-width: 600px) {
		flex-direction: column;
		button {
			width: 90%;
      
		}
	}
`;
const NavigationButton = styled.div`
	height: 6rem;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		animation: bounceArrow 1s 2s infinite;
		cursor: pointer;
	}
	@keyframes bounceArrow {
		0% {
			transform: translateY(-5px);
		}
		50% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-5px);
		}
	}
`;
