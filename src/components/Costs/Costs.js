import './Costs.css'
import Card from '../UI/Card'
import CostFilter from './CostFilter';
import React, { useState } from 'react';
import CostList from './CostList';
import CostsDiagram from './CostsDiagram';

 const Cost = (props) => {

    const [selectedYear, setSelectedYear] = useState('2021');

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    }

    const filteredCost = props.costs.filter(cost=>
        { return cost.date.getFullYear().toString() === selectedYear;}
    );

    return (
        <div>
            <Card className='costs'>
                <CostFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
                <CostsDiagram costs={filteredCost}/>
                <CostList costs={filteredCost}/>
            </Card>
        </div>
    );
}

export default Cost;