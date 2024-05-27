import CostItem from './CostItem'
import './Costs.css'
import Card from '../UI/Card'
import CostFilter from './CostFilter';
import React, { useState } from 'react';

 const Cost = (props) => {

    const [selectedYear, setSelectedYear] = useState('2021');

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
        console.log(year);
        console.log('From Costs component');
    }

    return (
        <div>
            <Card className='costs'>
                <CostFilter year={selectedYear} onChangeYear={yearChangeHandler}/>

                {props.costs.map((cost) => (
                    <CostItem 
                    key={cost.id}
                    date={cost.date} 
                    description={cost.description} 
                    amount={cost.amount}
                    />
                ))}
                {/* <CostItem 
                    date={props.costs[0].date } 
                    description={props.costs[0].description } 
                    amount={props.costs[0].amount } 
                />
                <CostItem 
                    date={props.costs[1].date } 
                    description={props.costs[1].description } 
                    amount={props.costs[1].amount } 
                />
                <CostItem 
                    date={props.costs[2].date } 
                    description={props.costs[2].description } 
                    amount={props.costs[2].amount } 
                /> */}
            </Card>
        </div>
    );
}

export default Cost;