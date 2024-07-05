import React, { useState } from 'react';
import { QIButton, QISwitch, QIInput } from '@qinvent/react-kit';
import '@qinvent/react-kit/dist/styles/tailwind.css';
import sprite from "@qinvent/react-kit/dist/assets/icons.svg"
import "./App.css";

const MyComponent = () => {

  const [value, setValue] = useState("")
  const [Password, setPassword] = useState("")

  const handleButtonClick = () => {
    // Handle button click
    alert("Login Successfull")
  };

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <>
      <form action="">
        <div className='form-group' >
          <label htmlFor="">Name</label>
          <QIInput onChange={handleChange} value={value} />
        </div>
        <div className='form-group' >
          <label  htmlFor="">Password</label>
          <QIInput onChange={handleChangePassword} value={Password} />
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
          icon={{ src: `${sprite}#cross`, height: '20px', width: '20px', align: 'right' }}
          disabled={false}
        >
          Login
        </QIButton>
      </form>
    </>

  );
};

export default MyComponent;