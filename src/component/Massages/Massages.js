import React, {useEffect, useRef} from 'react'
import Massage from './Massage'
import "./massages.css"

const Massages = ({massages, name}) => {

    const massagesEndRef = useRef(null)

    const scrollToBottom = () => {
      massagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }


    useEffect(() => {
        scrollToBottom()
      }, [massages]);
    return (
        <div className="massages">
            {massages.map((massage, index) => <div key={index}>
                <Massage massage={massage} name={name}/>
            </div>
            )}
            <div ref={massagesEndRef}/>
        </div>
    )
}

export default Massages
