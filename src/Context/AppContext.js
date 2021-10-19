import { createContext, useReducer } from "react"


const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
         
            return {
                ...state, 
                expenses: [...state.expenses, action.addExpensePayload],
                budget: state.budget - action.addExpensePayload.cost,
                totalCosts: state.totalCosts + action.addExpensePayload.cost
            }

        case 'EDIT_ITEM':

            console.log(state.expenses)
            console.log(action.editPayload.id)
            
            // console.log(state) 
            // state.expenses.map((expense) => {
            //     if(expense.id === action.editPayload.id) {
            //         const newItem = Object.assign({}, expense, {name: action.editPayload.name, cost: parseInt(action.editPayload.cost), id: action.editPayload.id})
            //         console.log(newItem)
            //         return {
            //             ...state,
            //             expenses: newItem
            //         }
            //     } 
            // })

            // state.expenses.pop((expense) => expense.id === action.editPayload.id)
            
            return {
                ...state,
                expenses:   state.expenses.map((expense) => {
                                if(expense.id === action.editPayload.id) {
                                    expense.name = action.editPayload.name 
                                    expense.cost = parseInt(action.editPayload.cost) 
                                    expense.id = action.editPayload.id 
                                } 
                            })
                
            }

        case 'DELETE_EXPENSE': 
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.deletePayload)
            }
        case 'SET_BUDGET':
            // console.log()
            
            return {
                ...state,
                budget: state.budget + parseInt(action.remainingPayload),
            }
        

        default:
            return state;
    }
}


const initialState = {
    budget: 0,
    expenses: [
        // {
        //     id: 12, 
        //     name: 'grocery', 
        //     cost:400
        // }
    ],
    totalCosts: 0
}


export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            totalCosts: state.totalCosts,
            dispatch,
        }} >
     
            {props.children}
        </AppContext.Provider>)


}