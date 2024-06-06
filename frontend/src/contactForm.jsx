import React ,{useState}from 'react'

const ContactForm=({existingContact={},updateCallback})=>{

    const [firstName,setFirstName]=useState(existingContact.firstName||"")
    const [lastName,setlastName]=useState(existingContact.lastName||"")
    const[email,setEmail]=useState(existingContact.email||"")
    
    const updating = object.entries(existingContact).length!==0
    const onSubmit= async (e)=>{
        e.preventDefault()
        
        const data={
            firstName,lastName,email
        }
        const url='http://localhost:5000/'+(updating ?`update/${existing.id}`:'create')
        const options={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }

        const response= await fetch(url,options)

        if (response.status!==200 && response.status!==201) {
            const data= await response.json()
            alert(data.message)
        } else {
            // Handle success
            updateCallback()
            console.log('Contact created successfully!');
        }

    }   
    return (
        
        <form onSubmit={onSubmit} >
            <div>
            <label htmlFor='firstName'>FirstName:</label>
                <input
                    id='firstName'
                    value={firstName}
                    type='text'
                    onChange={(e)=>setFirstName(e.target.value)}
                />

                <label htmlFor='lastName'>lastName:</label>
                <input
                    id='lastName'
                    value={lastName}
                    type='text'
                    onChange={(e)=>setlastName(e.target.value)}
                />

                <label htmlFor='email'>email:</label>
                <input
                    id='email'
                    value={email}
                    type='text'
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </div>  
            <button type='submit'>Create</button>
        </form>
  )
}


export default ContactForm
