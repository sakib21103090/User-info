import React from 'react';
import './User.css'
const User = (props) => {
    console.log(props.user)
    const {name,address,company,email,phone  }=props.user;
    return (
        <div className='style-User'>
            <div className='h-tag'>
            <h2>Name:{name}</h2>
            <h3>Address:{address.suite}</h3>
            <h4>Company Name:{company.name}</h4>
            <h5>Email:{email}</h5>
            <h6>Phone:{phone}</h6>
            </div>

        </div>
    );
};

export default User;