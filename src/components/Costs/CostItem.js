import './CostItem.css';
import CostDate from './CostDate';
import Card from '../UI/Card';
// import { useState } from 'react';

 const CostItem = (props) => {

    // const [description, setDescription] = useState(props.description);

    // const changeDescriptionHandler = () => {
    //     setDescription('New cost'); //description = 'New cost';
    //     console.log(description); //'New cost'; & CostItem(props);
    // }

    return (
        <Card className='cost-item'>
            <CostDate date={props.date}/>
            <div className='cost-item__description'>
                <h2>{props.description}</h2>
                <div className='cost-item__price'>{props.amount} $</div>
            </div>
            {/* <button onClick={changeDescriptionHandler}>Change description</button> */}
        </Card>
    ) 
}

export default CostItem;