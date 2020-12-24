import './App.css';
import Navbar from './components/navbar/navbar'
import Homepage from './components/pages/homepage'
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <Homepage />
      </div>
    </ChakraProvider>

  );
}

export default App;
