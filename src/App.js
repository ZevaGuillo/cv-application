import './App.css';
import FormCV from './components/FormCV';

function App() {
  return (
    <div className="App">
      <h1><span>CV</span>APPLICATION</h1>
      <div>
        <FormCV/>
      </div>
      <div class="attribution"> 
        Coded by <a className='github' href="https://github.com/ZevaGuillo">
        <i class="fab fa-github" aria-hidden="true"></i> ZevaGuillo</a>.
      </div>
    </div>
  );
}

export default App;
