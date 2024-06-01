import React, { useState } from 'react';
import './CostForm.css'

const CostForm = (props) => {

    const [inputName, setInputName] = useState("");
    const [inputAmount, setInputAmount] = useState("");
    const [inputDate, setInputDate] = useState("");

    // const [userInput, seUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: ''
    // });

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);

        //FIRST STYLE WITH PREVIOUS STATE
        // seUserInput({
        //     ...userInput,
        //     name: event.target.value,
        // })

        //SECOND STYLE WITH PREVIOUS STATE
        // seUserInput((previousState)=> {
        //     return {
        //         ...previousState,
        //         name: 
        //     }
        // })
    };
    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
        // seUserInput({
        //     ...userInput,
        //     setAmount: event.target.value,

        // })
    };
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
        // seUserInput({
        //     ...userInput,
        //     setDate: event.target.value,

        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        };

        props.onSaveCostData(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Name</label>
                    <input 
                        type="text"  
                        value={inputName}
                        onChange={nameChangeHandler}
                    />
                </div>
                <div className="new-cost__control">
                    <label>Amount</label>
                    <input 
                        type="number" min='0.01' step='0.01' 
                        value={inputAmount}
                        onChange={amountChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Date</label>
                    <input 
                        type="date" min='2019-01-01' max='2025-01-01' 
                        onChange={dateChangeHandler}/>
                </div>

                <div className="new-cost__actions">
                    <button type="submit">Add expense</button>
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                </div>
            </div>
        </form>
    )
}

export default CostForm;