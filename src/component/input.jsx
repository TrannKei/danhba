import './style.css'
import React from 'react';
import { useState } from 'react';


function input(props) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

 function handleSubmit(){
  props.handleSubmit(name, phone)
 }
  return (
    <form 
      className='add' onSubmit={e => {
        handleSubmit()
        e.preventDefault()}}>
      <input type="text"
        placeholder="Tên"
        className="name"
        value={name}
        onChange={ev => setName(ev.target.value)}
      />
      <input type="number"
        placeholder="Điện Thoại"
        className="phoneNumber"
        value={phone}
        onChange={ev => setPhone(ev.target.value)}
      />
      <div className='add-btn'
      type="submit"
        
      >THÊM</div>
    </form>
  )
}
export default input;