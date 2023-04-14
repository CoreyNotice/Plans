const React = require('react')
const Default = require('./layout/default')


function New () {
    return (
      <Default>
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
          <label htmlFor="Free">Free?</label>
          <input
            type="checkbox"
            name="free"
            id="free"
            defaultChecked
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
        <div className="backButton">
  <a href="/plans"><button>homex</button></a>
</div>

      </Default>
    )
}

module.exports = New

