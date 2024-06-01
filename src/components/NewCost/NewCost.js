import { useState } from 'react';
import CostForm from './CostForm';
import './NewCost.css'

const NewCost = (props) => {

    const [isFormVisible, stateisFormVisible] = useState(false);

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        props.onAddCost(costData);
        stateisFormVisible(false);
    }

    const inputCostDataHandler = () => {
        stateisFormVisible(true);
    }

    const cancelOnHandler = () => {
        stateisFormVisible(false);
    }
 
    return (
        <div className="new-cost">
            {!isFormVisible && <button onClick={inputCostDataHandler}>Add new expense</button>}
            {isFormVisible && <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelOnHandler}/>}
        </div>
    )
}

export default NewCost;