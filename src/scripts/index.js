async function getInfoGit (users){
  const getUser = await fetch(`https://api.github.com/users/${users}`,{
    method: "GET"
  })
  .then(async(Response)=> {
    if(Response.ok){
      const responseData = await Response.json()
      localStorage.setItem('users',JSON.stringify(responseData)) 
    } else {
      location.replace('./src/pages/error.html')
    }
  })

  const getUserRepo = await fetch(`https://api.github.com/users/${users}/repos`,{
    method: "GET"
  })
  .then(async(Response)=> {
    if(Response.ok){
      const responseData = await Response.json()
      localStorage.setItem('repos',JSON.stringify(responseData))
    } else {
      location.replace('./src/pages/error.html')
    }
  })
}


function searchGitProfile (){
  const input = document.querySelector('.index__input')
  const button = document.querySelector('#index__button')
  
  button.addEventListener('click', ()=>{
    const users = input.value
    
    localStorage.setItem('username', users)
    getInfoGit(users)
    setTimeout(()=>{
      location.replace('./src/pages/profile.html')
    },1000)
  })
}
searchGitProfile()
