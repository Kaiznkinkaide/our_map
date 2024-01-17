import cars from"./assets/data/cars"
import './App.css'
import CarList from './assets/components/carlist/CarList'

function App() {
  // Hier ist die Verwaltung
console.log(cars);
  return (
    <>
      <CarList cars={cars}/>
    </>
  )
}

export default App
