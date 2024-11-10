import { Box, Heading, Text, Flex, Icon, Link } from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaTelegram } from 'react-icons/fa';
import { useTheme } from "next-themes";



const Contacts: React.FC = () => {
	const { theme } = useTheme();

	console.log("THEME!! :", theme)

  return (
    <Box p={4} textAlign="left">
      <Heading fontSize="2xl" mb={4} color="teal.500">Контакты</Heading>

      <Flex gap={4} justifyContent="space-between" flexWrap="wrap">
	      <Link href="mailto:m.d.pakhomov@yandex.ru?subject=Заинтересовало ваше резюме">
		      <Flex align="center" mb={2}>
			      <Icon boxSize={5} mr={2} color="teal.500">
				      <FaEnvelope />
			      </Icon>
			      <Text>m.d.pakhomov@yandex.ru</Text>
		      </Flex>
	      </Link>

	      <Link href="https://t.me/PakhomovMaksim" target="_blank">
		      <Flex align="center" mb={2}>
			      <Icon boxSize={5} mr={2} color="teal.500">
				      <FaTelegram />
			      </Icon>
			      <Text>@PakhomovMaksim</Text>
		      </Flex>
	      </Link>

        <Link href="tel:+79538296272">
	        <Flex align="center" mb={2}>
		        <Icon boxSize={5} mr={2} color="teal.500">
			        <FaPhone />
		        </Icon>
		        <Text>+79538296272</Text>
	        </Flex>
        </Link>

      </Flex>
    </Box>
  );
};

export default Contacts;
