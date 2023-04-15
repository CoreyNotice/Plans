const React=require('react')
const Default=require('./layout/default')

function show({seeds,title}){
    console.log(seeds.city)
    return(
 <Default title={title}>
              <h2>{seeds.name}</h2>
           <br/>
           <aside> <img src={seeds.image} alt={seeds.city}/>
           </aside>
           <br/>
             <p>
                {seeds.about}<br/>
                {seeds.street_address}  <br/>
             <br/>
                starts {seeds.time}
             </p>
           <br/>
           <p>
                Cost to enter:
                {
                    seeds.free
                    ?<span>this is a free event</span>
                    :<span>See cover charge in about section</span>
                }    
            </p>
                      <a href={`/plans/${seeds.id}/edit`}><button type="button" class="btn btn-outline-danger">Edit</button></a>
    
                      <form action={`/plans/${seeds.id}?_method=DELETE`} method="POST">
                             <input class='p-3 mb-2 bg-danger text-white ' type='submit' value="DELETE"/>
                               </form>

                                  
        

</Default>
    )
}

module.exports=show