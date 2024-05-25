import './CostItem.css';
import CostDate from './CostDate';

export default function CostItem(props) {

    // const day = props.date.toLocaleString('en-EN', {day: '2-digit'});
    // const month = props.date.toLocaleString('en-EN', {month: 'short'});
    // const year = props.date.getFullYear();

    return (
        <div className='cost-item'>
            <CostDate date={props.date}/>
                {/* <div>{day}</div>
                <div>{month}</div>
                <div>{year}</div> */}

            {/* <div>{props.date.toISOString()}</div> */}
            <div className='cost-item__description'>
                <h2>{props.description}</h2>
                <div className='cost-item__price'>{props.amount} $</div>
            </div>
        </div>
    ) 
}