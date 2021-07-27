import React from 'react';
import { Link } from 'react-router-dom';
import ipssi from '../images/ipssi-logo.png';

const ContactDetail = (props) => {
    const {name,email} = props.location.state.contact;
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={ipssi} alt="Ipssi" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue center">Back To List</button>
                </Link>
            </div>
        </div>
    );
};

export default ContactDetail