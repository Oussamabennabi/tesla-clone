import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import carInfos from '../app/carInfo.json';

import AccessoriesImg from '../images/accessories.jpg';
import solarPanelImg from '../images/solar-panel.jpg';
import solarRoofImg from '../images/solar-roof.jpg';
const Home = () => {
	return (
		<Container>
			{/* CARS */}
			{carInfos.map((carInfo) => (
				<Section
					key={carInfo.id}
					header={carInfo.title}
					text={carInfo.description}
					leftBtnText="CUSTOM ORDER"
					rightBtnText="EXISTING INVENTORY"
					id={carInfo.id}
					isCar={true}
					backgroundImage={carInfo.image}
				/>
			))}
			{/* SOLAR */}
			<Section
				header="Solar Panels"
				text="Lowest Cost Solar Panels in America"
				leftBtnText="ORDER NOW"
				rightBtnText="LEARN MORE"
				backgroundImage={solarPanelImg}
			/>
			<Section
				header="Solar Roof"
				text="Produce Clean Energy From Your Roof"
				leftBtnText="ORDER NOW"
				rightBtnText="LEARN MORE"
				backgroundImage={solarRoofImg}
			/>
			<Section
				header="Accessories"
				noText={true}
				leftBtnText="ORDER NOW"
				rightBtnText=""
				backgroundImage={AccessoriesImg}
			/>
		</Container>
	);
};

export default Home;

const Container = styled.main`
	height: 100vh;
	scroll-behavior: smooth;
	overflow-x: hidden;

	scroll-snap-type: y mandatory;
`;
