import { Box, Heading, Badge, SimpleGrid } from '@chakra-ui/react';
import { skills } from "./config.ts"

const Skills: React.FC = () => {
    return (
      <Box p={4} color="teal.500">
          <Heading fontSize="2xl" textAlign="left" mb={4}>Навыки</Heading>
          <SimpleGrid columns={{ base: 2, md: 3 }} gap={4}>
              {skills.map((skill) => (
                <Box key={skill}>
                    <Badge colorScheme="teal" p={2} borderRadius="md" fontSize="md" display="block" mx="auto">
                        {skill}
                    </Badge>
                </Box>
              ))}
          </SimpleGrid>
      </Box>
    );
};

export default Skills;