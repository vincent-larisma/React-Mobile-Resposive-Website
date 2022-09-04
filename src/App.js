import HomePage from './Components/Pages/HomePage'
import HomePageMobile from './Components/Pages/HomePageMobile'
import { useMediaQuery } from '@react-hook/media-query'

function App() {
  const matches = useMediaQuery('only screen and (min-width: 1024px)')
  return <>{matches ? <HomePage /> : <HomePageMobile />}</>
}

export default App
