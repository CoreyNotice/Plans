const React = require('react')
const Default = require('./layout/default')

function Edit ({seeds,title}) {
    return (
      <Default title={title}>
        <h2>Edit a bread</h2>
        <form action={`/plans/${seeds.id}?_method=PUT`} method="POST">

        <label for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
        
          />
           <label for="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
          
          />
              <label for="state">state</label>
          <input
            type="text"
            name="state"
            id="state"
          
          />
            <label for="street_address">street_address:</label>
          <input
            type="text"
            name="street_address"
       
          />
            <div class='form-group'>
            <label for="about">about:</label>
          <textarea
            class="form-control"
            row="10"
            type="text"
            name="about"
            id="about"
            required
          />
          </div>
     
          <label for="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"/>
           
           <div class='form-check'>
          <label class="form-check-label" for="Free">Free?</label>
          <br/>
          <input
            type="radio"
            name="free"
            class="form-check-input "
            id="radio"
          
            
          /><br/>
          </div>
              <label for="date:">date:</label>
          <input
            type="text"
            name="date"
            id="date"
     
          />
                 <label for="time:">time:</label>
          <input
            type="text"
            name="time"
            id="time"
         
          />    
          <br />   
        
          <br />
          <input class='bg-primary text-white '  type="submit"/>
        </form>
      </Default>
    )
}

module.exports = Edit
