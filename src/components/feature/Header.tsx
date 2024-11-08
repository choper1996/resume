import { Heading, Text, Image, Flex } from '@chakra-ui/react';

import photo from "../../assets/photo.jpg"

const Header: React.FC = () => {
	return (
		<Flex flexDirection={{ base: "column", md: "row" }} alignItems={{ base: "center", md: "left" }} >
			<Image
				src={photo}
				alt="Profile Photo"
				boxSize="150px"
				borderRadius="full"
				objectFit="cover"
				mr={{ md: 6 }}
				mb={{ base: 4, md: 0 }}
			/>
			<Flex py={6} direction="column" justifyContent="center">
				<Heading fontSize="4xl" color="teal.500" textAlign={{ base: "center", md: "left" }}>Пахомов Максим</Heading>
				<Text fontSize="xl" color="gray.500" textAlign={{ base: "center", md: "left" }}>Frontend Developer</Text>
			</Flex>
		</Flex>

	);
};

export default Header;