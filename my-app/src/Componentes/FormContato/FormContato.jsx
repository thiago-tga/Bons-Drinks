import React from 'react';
import './FormContato.css';
import imgForm from  '../../Asserts/img/contact-pic.jpg'
import Button from '../Button/button'


const FormContato = () => {
  return (
      <div className="Form-contato-content">

      <h1 className="title-contato">Contato</h1>

      <img className="contact-pic" src={imgForm} alt="" />

      <div className="form">

        <form className="contact-form">

          <div className="item-form">
            <label className='formTitle'htmlFor="name">Nome: </label>
            <input className='inputBox' type="text" name="name" id="" />
          </div>

          <div className="item-form">
            <label className='formTitle' htmlFor="email">E-mail: </label>
            <input className='inputBox' type="email" name="email" id="" />
          </div>

          <div className="item-form">
            <label className='formTitle' htmlFor="message">Mensagem: </label>
            <textarea className='textAreaBox' name="message"></textarea>
          </div>

          <div className="item-form-btn">
            <Button className="button btn-contact"/>
          </div>

        </form>
      </div>
    </div>
  )
}
export default FormContato