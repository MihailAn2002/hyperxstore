import React from "react";
import c from './contacs.module.css'
import Contactsform from "./contactform/contactform.jsx";
import Contactsorder from "./contactorder/contactorder";

const Contacts = () => {
    return (
        <div>
            <Contactsform/>
            <Contactsorder/>
        </div>
    )
}

export default Contacts;