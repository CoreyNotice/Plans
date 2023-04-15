const React = require('react')
const Default = require('./layout/default')

function Edit ({seeds,title}) {
    return (
      <Default title={title}>
        <h2>Edit a bread</h2>
        <form action={`/plans/${seeds.id}?_method=PUT`} method="POST">

        <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
        
          />
           <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
          
          />
              <label htmlFor="state">state</label>
          <input
            type="text"
            name="state"
            id="state"
          
          />
            <label htmlFor="street_address">street_address:</label>
          <input
            type="text"
            name="street_address"
       
          />
            <label htmlFor="about">about:</label>
          <input
            type="text"
            name="about"
            id="about"
         
          />
     
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"/>
          <label htmlFor="Free">Free?</label>
          <input
            type="checkbox"
            name="free"
            id="free"
            defaultChecked
          />
              <label htmlFor="date:">date:</label>
          <input
            type="text"
            name="date"
            id="date"
     
          />
                 <label htmlFor="time:">time:</label>
          <input
            type="text"
            name="time"
            id="time"
         
          />    
          <br />   
        
          <br />
          <input type="submit"/>
        </form>
      </Default>
    )
}

module.exports = Edit
