import Stars from './components/Stars';
import './App.css'

function App() {
  return (
    <div>
      <div className="d-flex">
        <Stars count={3}/>
      </div>
      <div className="d-flex">
        <Stars count={5}/>
      </div>
      <div className="d-flex">
        <Stars count={1}/>
      </div>
    </div>
  )
}

export default App
