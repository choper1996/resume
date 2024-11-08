
import { Box, Heading, Text } from '@chakra-ui/react';

const About: React.FC = () => {
	return (
		<Box textAlign="left" p={4}>
			<Heading fontSize="2xl" mb={4} color="teal.500">Обо мне</Heading>
			<Text mb={2}>
				Опыт более 6&nbsp;лет.
			</Text>
			<Text mb={2}>
				Начал карьеру устроившись верстальщиком в&nbsp;стартап. Прошел путь от&nbsp;верстки
				сайтов со&nbsp;сложным дизайном и&nbsp;анимациями до&nbsp;разработки интерфейсов и&nbsp;проработки
				архитектуры для веб и&nbsp;мобильных приложений.
			</Text>
			<Text mb={2}>
				Мой основной стек: <b>TS</b> + <b>React</b>.
			</Text>
			<Text mb={2}>
				Имею опыт лидерства на&nbsp;долго идущем проекте и&nbsp;разработки
				приложения с&nbsp;нуля, с&nbsp;продумыванием архитектуры. Владею софт скилами и&nbsp;осознаю важность
				правильного и&nbsp;тактичного взаимодействия всех участников команды. Ориентируюсь на&nbsp;поставку
				бизнес-ценности&nbsp;&mdash; для меня важно выполнять работу качественно и&nbsp;приносить пользу бизнесу.
			</Text>
		</Box>
	);
};

export default About;