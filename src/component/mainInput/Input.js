import React from 'react'
import SendIcon from '@material-ui/icons/Send';
import "./input.css"

const Input = ({massage, setMassage, sendMassage}) => {
    return (
        <form className="input__main">
            <input
            type="text"
            className="input__input"
            placeholder="Type a massage..."
            value={massage}
            onChange={(event) => setMassage(event.target.value)}
            onKeyPress={event => event.key === 'Enter' && sendMassage(event)}/>
            <button onClick={(event) => sendMassage(event)}><SendIcon/></button>
        </form>
    )
}

export default Input
