import NewCost from './components/NewCost/NewCost';
import Costs from './components/Costs/Costs'
import { useState } from 'react';

const INIT_COSTS = [
  {
    id: 'c1',
    date: new Date( 2024,2,12),
    description: 'TV',
    amount: 999.99
  },
  {
    id: 'c2',
    date: new Date( 2024,2,14),
    description: 'Telephone',
    amount: 699.99
  },
  {
    id: 'c3',
    date: new Date( 2024,2,18),
    description: 'Bike',
    amount: 1999.99
  }
]

const App = () => {

  const [costs, setCosts] = useState(INIT_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCosts=> {
      return [cost, ...prevCosts]
    });
  }

  return (
    <>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs} />
    </>
  );
}

export default App;