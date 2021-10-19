import React, {useState, useContext} from 'react'

import { AppContext } from '../Context/AppContext'
import ViewItemList from './ViewItemList'
import EditItem from './EditItem'

//style
import './css/ExpenseItem.css'

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext)

    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(!isEditing)
    }

    const handleSaveClick = (value) => { 
        // console.log(value)
        dispatch({
            type: 'EDIT_ITEM',
            editPayload: value, 
        });
        setIsEditing(false);
   }
   

    return (
        <>
            { isEditing ?  
                (
                    <EditItem 
                        id={props.id} 
                        name={ props.name} 
                        cost={props.cost}
                        handleSaveClick={handleSaveClick} 
                    />
                ) : 
                (
                    <ViewItemList 
                        index={props.index}
                        id={props.id} 
                        name={ props.name} 
                        cost={props.cost}
                        handleEditClick={handleEditClick}
                    />
                )
            }
        </>
       
    )
}

export default ExpenseItem
