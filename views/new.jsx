const React = require('react')
const Default = require('./layout/default')


function New ({title}) {
    return (
      <Default title={title}>
        <h2>Add a new events</h2>
    
        <form action="/plans" method="POST">

          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
          />
           <label for="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            required
          />
           <label for="state">state</label>
          <input
            type="text"
            name="state"
            id="state"
            required
          />
            <label for="street_address">street_address:</label>
          <input
            type="text"
            name="street_address"
            id="street_address"
            required
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
          
            
          />
          </div>
          <br/>
                   <label for="date:">date:</label>
          <input
            type="text"
            name="date"
            id="date"
            required
          />
                 <label for="time:">time:</label>
          <input
            type="text"
            name="time"
            id="time"
            required
          />
          <br />
          <input class='bg-primary text-white ' type="submit"/>
       
        </form>

      </Default>
    )
}

module.exports = New

