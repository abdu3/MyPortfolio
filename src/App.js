import './App.css';
import Home from './pages/Home';
function App() {
  {console.log(document.readyState ==="complete")}

  return (
    <div className='app'>
      <Home/>
    </div>
  );
}
export default App;
