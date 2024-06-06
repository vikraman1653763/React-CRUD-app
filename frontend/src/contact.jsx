import React from 'react'

const ContactList=({contacts})=>{
    console.log(contacts)
    return( 
    <>
    <h2>Contact List</h2>
    <table>
        <thead>
            <tr>
                <th>firstName</th>
                <th>lastName</th>
                <th>email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {contacts.map((contact)=>(
                <tr key={contact.id}>
                    <td>{contact.firstname}</td>
                    <td>{contact.lastname}</td>
                    <td>{contact.email}</td>
                    <td>
                        <button>Update</button>
                        <button>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
)}
export default ContactList
