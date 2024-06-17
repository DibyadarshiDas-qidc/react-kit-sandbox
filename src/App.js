import React from 'react';
import { QIButton, QISwitch, QIInput } from '@qinvent/react-kit';
import '@qinvent/react-kit/dist/styles/bootstrap.css';
import "./App.css";

const MyComponent = () => {

  const handleButtonClick = () => {
    // Handle button click
    alert("Logi Successfull")
  };

  return (
    <>
      <form action="">
        <div className='form-group' >
          <label htmlFor="">Name</label>
          <QIInput />
        </div>
        <div className='form-group' >
          <label htmlFor="">Password</label>
          <QIInput />
        </div>
        <div className='form-group' >  
          <QISwitch />
          <span> Remember Password</span>
        </div>
        <QIButton
          type="button"
          size="md"
          className="qi-btn primary"
          variant="link"
          onClick={handleButtonClick}
          disabled={false}
        >
          Login
        </QIButton>
      </form>
    </>

  );
};

export default MyComponent;