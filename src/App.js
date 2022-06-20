import './App.css';
import FormCV from './components/FormCV';
import PreviewPDF from './components/PreviewPDF';

function App() {
  return (
    <div className="App">
      <h1>CV APPLICATION</h1>
      <div className='content'>
        <FormCV/>
        <PreviewPDF/>
      </div>
    </div>
  );
}

export default App;
