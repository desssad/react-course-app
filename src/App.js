import CostItem from "./components/CostItem";

function App() {

  const costs = [
    {
      date: new Date( 2024,2,12),
      description: 'TV',
      amount: 999.99
    },
    {
      date: new Date( 2024,2,14),
      description: 'Telephone',
      amount: 699.99
    },
    {
      date: new Date( 2024,2,18),
      description: 'Bike',
      amount: 1999.99
    }
  ]

  return (
    <>
      <h1>Let start learn React!</h1>
      <CostItem 
        date={costs[0].date } 
        description={costs[0].description } 
        amount={costs[0].amount } 
      />
      <CostItem 
        date={costs[1].date } 
        description={costs[1].description } 
        amount={costs[1].amount } 
      />
      <CostItem 
        date={costs[2].date } 
        description={costs[2].description } 
        amount={costs[2].amount } 
      />
    </>
  );
}

export default App;

//1:43:49