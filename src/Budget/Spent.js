import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Spent = (props) => {
    const { totalCosts } = useContext(AppContext)
    console.log(totalCosts)
    // const totalExpenses = expenses.reduce((total, item) => {
    //     return (total += item.cost)
    // }, 0)

    const spanFlex = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    return (
        <div className="alert bg-dark text-white" style={spanFlex}>
            <span>Expenses</span>
            <span>₱{totalCosts}</span>
        </div>  
    )
}

export default Spent
