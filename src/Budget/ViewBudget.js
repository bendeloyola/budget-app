import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import { btnEditAdd } from '../Styles'

const ViewBudget = (props) => {

    const { budget } = useContext(AppContext)


    console.log(budget)

    // const totalExpenses = expenses.reduce((total, item) => {
    //     // console.log(`total ${total} + ${item.cost}` )
    //     return (total = total + item.cost)
    // }, 0)

    // const resultTotal = budget - totalExpenses;

    return (
        <>
            <span >Savings / Balance</span>
            <span>₱{budget}</span>
            <button type='button' className='btn' style={btnEditAdd} onClick={props.handleEditClick}>
                Add
            </button>
        </>
    )
}

export default ViewBudget
