import { Box } from '@chakra-ui/react';
import Header from "./components/feature/Header.tsx";
import About from "./components/feature/About.tsx";
import Experience from "./components/feature/Experience.tsx";
import Skills from "./components/feature/Skills.tsx";
import Contacts from "./components/feature/Contacts.tsx";

import './App.css'

function App() {

  return (
  <Box maxW="800px" w="auto" p={{ base: 0, md: 4 }}>
    <Header />
    <About />
    <Experience />
    <Skills />
    <Contacts />
  </Box>
  )
}

export default App
