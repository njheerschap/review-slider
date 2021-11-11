import React from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


const Buttons = ({prevPerson, nextPerson}) => {

    return (
    <>
        <button className="prev" >
            <FiChevronLeft  onClick={prevPerson}/>
        </button>
        <button className="next" >
            <FiChevronRight onClick={nextPerson} />
        </button>
    </>
    )
}

export default Buttons;