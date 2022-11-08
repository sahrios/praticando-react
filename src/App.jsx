import './App.css'
import Header from './components/Header'
import Bio from './components/Bio'
import Cards from './components/Cards'



function App() {
  return (
   <div className='App'>
    <Header>Meus artistas favoritos</Header>
    <Bio/>
    <Cards/>
   </div>   
  )
}

export default App
