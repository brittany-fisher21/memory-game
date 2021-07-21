import MemoryCard from './components/MemoryCard';
import './App.css';
// am I missing a class? revisit!

function generateDeck () {
  return (
// part 3 step 1
  );
}

function App() {
  constructor (props) {
    super(props);
    this.props = {
      deck: [],
      pickedCards: [],
    };

  return (
    <div className="App">
      <header className="App-header">      
        
       
       <h1>Memory Game</h1>
        <h3 className='subtitle'>Match cards to win</h3>
        
      </header>
     <div> <MemoryCard/>  <MemoryCard/>  <MemoryCard/>  <MemoryCard/> </div>
     <div> <MemoryCard/>  <MemoryCard/>  <MemoryCard/>  <MemoryCard/> </div>
     <div> <MemoryCard/>  <MemoryCard/>  <MemoryCard/>  <MemoryCard/> </div>
     <div> <MemoryCard/>  <MemoryCard/>  <MemoryCard/>  <MemoryCard/> </div>
    </div>
  );
}

}




export default App;
