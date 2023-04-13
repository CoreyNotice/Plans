const React = require('react')
const Default = require('./layout/default')

function Index ({seeds,title}) {
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        {/* <p>I have {seeds[0].name} stuff!!!</p> */}
        <ul>
            {
                seeds.map((seeds,index)=>{
                    return(
                    <li key={index}>
                        <a href={`/plans/${index}`}>
                        {seeds.name}
                        </a>
                    </li>
                    )
                })
            }
        </ul>
      </Default>
    )
}

module.exports = Index
