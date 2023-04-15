const React = require('react')
const Default = require('./layout/default')

function Home ({seeds,title}) {
    return (
      <Default title={title}>
       <br/>
        <ul>
            {
                seeds.map((seeds)=>{
                    return(
                    <li class='border border-dark rounded-lg' key={seeds._id}>
                        <a href={`/plans/${seeds._id}`}>
                        <img  class= 'float-right border border-dark rounded-circle'src={seeds.image}/>
                        <h2>{seeds.name}</h2><br/>
                        <h5>{seeds.city},{seeds.state}</h5> 
                 
                 
                        </a>
                    </li>
                    )
                })
            }
        </ul>
       
  
      </Default>
    )
}

module.exports = Home
