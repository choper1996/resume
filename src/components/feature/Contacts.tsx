import { Box, Heading, Text, Flex, Icon, Link } from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaTelegram } from 'react-icons/fa';

const Contacts: React.FC = () => {
  return (
    <Box p={4} textAlign="left">
      <Heading fontSize="2xl" mb={4} color="teal.500">Контакты</Heading>

      <Flex gap={4} justifyContent="space-between" flexWrap="wrap">
	      <Link href="mailto:m.d.pakhomov@yandex.ru?subject=Заинтересовало ваше резюме">
		      <Flex align="center" mb={2}>
			      <Icon boxSize={5} mr={2} color="teal.500">
				      <FaEnvelope />
			      </Icon>
			      <Text color="white">m.d.pakhomov@yandex.ru</Text>
		      </Flex>
	      </Link>

	      <Link href="https://t.me/PakhomovMaksim" target="_blank">
		      <Flex align="center" mb={2}>
			      <Icon boxSize={5} mr={2} color="teal.500">
				      <FaTelegram />
			      </Icon>
			      <Text color="white">@PakhomovMaksim</Text>
		      </Flex>
	      </Link>

        <Link href="tel:+79538296272" colorScheme="white">
	        <Flex align="center" mb={2}>
		        <Icon boxSize={5} mr={2} color="teal.500">
			        <FaPhone />
		        </Icon>
		        <Text color="white">+79538296272</Text>
	        </Flex>
        </Link>

      </Flex>
    </Box>
  );
};

export default Contacts;
