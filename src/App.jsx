import { useState } from 'react'
import Deck from './components/Deck'
import HomeScreen from './components/HomeScreen'

function App() {
  const [showDeck, setShowDeck] = useState(false);
  
  return (
    <>

      {!showDeck ? (<HomeScreen onStartRecall={() => setShowDeck(true)}/>) : (<Deck />)}
      
    </>
  )
}

export default App
