const React = require('react')
const Default = require('./layout/default')


function New ({title}) {
    return (
      <Default title={title}>
        <h2>Add a new bread</h2>
    
        <form action="/plans" method="POST">

          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
          />
           <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            required
          />
           <label htmlFor="state">state</label>
          <input
            type="text"
            name="state"
            id="state"
            required
          />
            <label htmlFor="street_address">street_address:</label>
          <input
            type="text"
            name="street_address"
            id="street_address"
            required
          />
            <label htmlFor="about">about:</label>
          <input
            type="text"
            name="about"
            id="about"
            required
          />
     
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"/>
            <div class='form-check '>
          <label class="form-check-label" for="Free">Free?</label>
          <br/>
          <input
            type="radio"
            name="free"
            class="form-check-input "
            id="radio"
            value="option1" 
            
          />
          </div>
          <br/>
                   <label htmlFor="date:">date:</label>
          <input
            type="text"
            name="date"
            id="date"
            required
          />
                 <label htmlFor="time:">time:</label>
          <input
            type="text"
            name="time"
            id="time"
            required
          />
          <br />
          <input type="submit"/>
        </form>

      </Default>
    )
}

module.exports = New

