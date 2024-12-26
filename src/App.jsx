import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'
import './App.css'


function App() {
  const coffees = useLoaderData();
  return (
    <div className='m-20'>
      <h2 className='text-3xl text-center my-20 text-purple-600'>Hot Hot Cold Coffee: {coffees.length}</h2>
      <div className='grid md:grid-cols-2 gap-20'>
        {
          coffees.map(coffee =><CoffeeCard key={coffee._id} coffee={coffee}>
          </CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
