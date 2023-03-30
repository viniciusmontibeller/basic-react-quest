import './App.css';
import StyledText from './components/StyledText';
import AlertButton from './components/AlertButton'

function App() {
  return (
    <div className='container'>
      <StyledText text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsum aspernatur cum voluptatum, corrupti reprehenderit odit cupiditate numquam consequuntur sunt sequi quaerat quisquam facere alias, quis asperiores ullam iure ipsa.' textColor='blue'/>

      <AlertButton label='Baixar CV'/>
    </div>
  );
}

export default App;
