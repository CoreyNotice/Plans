const React = require('react')
const Default = require('./layout/default')

function Edit ({seeds,index}) {
    return (
      <Default>
        <h2>Edit a bread</h2>
        <form action={`/plans/${index}?_method=PUT`} method="POST">

          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={seeds.name}
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            defaultValue={seeds.image}
            />
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked={seeds.hasGluten}
          />
          <br />
          <input type="submit"/>
        </form>
      </Default>
    )
}

module.exports = Edit
