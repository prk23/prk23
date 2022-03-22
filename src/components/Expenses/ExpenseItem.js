
import React, {useState} from 'react';
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css'

const ExpenseItem = (props) => {

    return (
        <Card className='expense-item'>
            <ExpenseDate dateProps={props.itemDate} />
            <div className='expense-item__description'>
                <h2>{props.itemName}</h2>
                <div className='expense-item__price'>
                    ${props.itemCost}
                </div>
            </div>
        </Card>
    );
}
export default ExpenseItem;