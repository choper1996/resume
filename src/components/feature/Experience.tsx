import {Box, Heading, Text, List, Card } from '@chakra-ui/react';
import { experience } from "./config.ts";

const Experience: React.FC = () => {
	return (
		<Box textAlign="left" p={4}>
			<Heading fontSize="2xl" mb={4} color="teal.500">Опыт работы</Heading>

			{experience.map((expItem) =>
					<Card.Root mb={2}>
						<Card.Body>
							<Text fontWeight="bold" color="teal.500">{expItem.company}</Text>
							<Text color="gray.500" mb={2}>{expItem.startPeriod} - {expItem.endPeriod}</Text>
							<Text fontWeight={700} mb={1}>Обязаности: </Text>
							<List.Root mb={4}>
								{expItem.responsibilities.map((text) => <List.Item>{text}</List.Item>)}
							</List.Root>
							<Text fontWeight={700} mb={1}>Достижения: </Text>
							<List.Root>
								{expItem.achievements.map((text) => <List.Item>{text}</List.Item>)}
							</List.Root>
						</Card.Body>
					</Card.Root>
				)
			}
		</Box>
	);
};

export default Experience
