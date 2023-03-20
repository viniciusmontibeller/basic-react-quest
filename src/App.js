import './App.css';
import HighlightedText from './components/text/text';
import Button from './components/button/button'

function App() {
  return (
    <div className='container'>
      <HighlightedText text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsum aspernatur cum voluptatum, corrupti reprehenderit odit cupiditate numquam consequuntur sunt sequi quaerat quisquam facere alias, quis asperiores ullam iure ipsa.' textColor='blue'/>

      <Button label='Baixar CV'/>
    </div>
  );
}

export default App;
