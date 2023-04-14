const React=require('react')
const Default=require('./layout/default')

function show({seeds,index}){
    console.log(seeds.city)
    return(
        <Default>
            <h2>Show Page</h2>
            <p>
                this is the thing
                {
                    seeds.free
                    ?<span>does</span>
                    :<span>does Not</span>
                }
                you get it?
            </p>
            <h3>{seeds.name}</h3>

            <img src={seeds.image} alt={seeds.city}/>
            <a href={`/plans/${index}/edit`}><button>Edit</button></a>
            <li><a href='/plans'>Home</a></li>
        

        </Default>
    )
}

module.exports=show