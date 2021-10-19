import React, { useState } from 'react'
import { btnEditAdd }  from '../Styles'

const EditItem = (props) => {
    // const [name, setName] = useState(props.name);
    const [value, setValue] = useState({name: props.name, cost: props.cost});

    const submitHandler = (e) =>{
        e.preventDefault()

        props.handleSaveClick(value)
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input
                    required='required'
                    type='text'
                    className='form-control mr-3'
                    value={value.name}
                    name="name"
                    onChange={(event) => setValue({...value, name: event.target.value})}
                    
                />
                <input
                    required='required'
                    type='number'
                    min="0"
                    step="1"
                    name="cost"
                    className='form-control mr-3'
                    value={value.cost}
                    onChange={(event) => setValue({...value, cost: event.target.value})}
                    
                />
                <button
                 
                    className='btn'
                    style={btnEditAdd}
                >
                    Save
                </button>
            </form>
        </>
    )
}

export default EditItem
