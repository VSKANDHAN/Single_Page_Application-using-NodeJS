let links=document.querySelectorAll('a')
let root=document.getElementById('root')
const loadHome=async function(){
    try{
        let data=await fetch(`http://127.0.0.1:3000/`)
        let homePage=await data.text()
        root.innerHTML=homePage

    }
 
    catch(err){
        if(err.message.includes('Failed to fetch')){
             root.innerHTML='Server is Down, Please Run The Server First.'
        }
        else{
         root.innerHTML='OOPSSSS Sorry cant reach the server at this moment'
 
 
        }
         }
}

loadHome()

let res;
links.forEach((e)=>{
    let attr=e.getAttribute('href');
    e.addEventListener('click',async (event)=>{
        event.preventDefault()
       try{
        let data=await fetch(`http://127.0.0.1:3000${attr}`)
        res=await data.text()
        root.innerHTML=res

       }
       catch(err){
       if(err.message.includes('Failed to fetch')){
        root.innerHTML='Server is Down, Please Run The Server First.'
    }
       else{
        root.innerHTML='OOPSSSS Sorry cant reach the server at this moment'


       }
        }

        
            
        

    })
})

