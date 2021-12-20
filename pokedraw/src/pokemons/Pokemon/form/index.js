import React, {useState} from 'react';
import "./style.css";

const initialState = {
    type: ''
}

const Form = (props) => {
    const [fields, setFields] = useState(initialState)

    const handleFieldsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleSubmit = event => {
        props.addType(fields);
        event.preventDefault();
        setFields(initialState);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='type'>Type: </label>
                    <input id="type" name="type" type="text" value={fields.type} onChange={handleFieldsChange}></input>
                    <button className="submit" type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}

export default Form;