const React=require('react')
const Default=require('./layout/default')

function show({seeds}){
    console.log(seeds.name)
    return(
        <Default>
            <h2>Show Page</h2>
            <p>
                this is the thing
                {
                    seeds.hasGluten
                    ?<span>does</span>
                    :<span>does Not</span>
                }
                you get it?
            </p>
            <h3>{seeds.name}</h3>

            <img src={seeds.image} alt={seeds.name}/>
            <li><a href='/plans'>Home</a></li>
        </Default>
    )
}

module.exports=show