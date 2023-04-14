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
          <label htmlFor="free">IS there a cost?</label>
          <input
            type="checkbox"
            name="free"
            id="free"
            defaultChecked={seeds.free}
          />
          <br />
          <input type="submit"/>
        </form>
      </Default>
    )
}

module.exports = Edit
