import React ,{useEffect, useState}from 'react'
import './App.css'
import ContactList from './contact'
import ContactForm from './contactForm'

function App() {

  const [contacts, setContacts]=useState([])
  const[isModalOpen, setIsModalOpen]=useState(false)
  useEffect(() =>{
    fetchContacts()
  },[])

  const fetchContacts= async () =>{
      const response = await fetch("http://localhost:5000/")
      const data = await response.json()
      setContacts(data.contacts)
      console.log(data.contacts)
  }

  const closeModal= ()=>{
    setIsModalOpen(false)
  }
  const openModal= ()=>{
    if(!isModalOpen){
      setIsModalOpen(true)
    }
  }
  return (
    <div>
      <ContactList contacts={contacts}/>
      <button onClick={openModal}>Create</button>
      {isModalOpen && <div className='modal'>
        <div className='content'>
        <span className='close' onClick={closeModal}>&times;</span>
          <ContactForm/>
        </div>
        </div>
      }
    </div>
  )
 }

export default App
