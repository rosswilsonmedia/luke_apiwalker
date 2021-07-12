import React, {useState} from 'react';

import { navigate } from '@reach/router';

const Form = (props) => {
    const [type, setType] = useState('people');
    const [id, setId] = useState(1);

    const selectHandler = (e) => {
        setType(e.target.value);
    }

    const inputHandler = (e) => {
        setId(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${type}/${id}`);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor='type'>Search for: </label>
                <select name='type' id='type' onChange={selectHandler} value={type}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                </select>
                <label htmlFor='id'> ID: </label>
                <input type='number' onChange={inputHandler} min='1' name='id' id='id' value={id}/>
                <input type='submit' value='Search'/>
            </form>
        </div>
    )
}

export default Form;