function render(users,array){

  const userIMG = document.querySelector('.profile_div > img')
  const userP = document.querySelector('.profile_div > p')
  
  userP.innerHTML = users.name
  userIMG.src = users.avatar_url
  
  const ul = document.querySelector('.profile__ul')
  array.forEach(element => {
    let description;
    if (element.description === null){
      description = 'Repositório sem descrição'
    } else {
      description = element.description
    }
    ul.insertAdjacentHTML('beforeend', 
    `<li>
        <h4>${element.name}</h4>
        <p>${description}</p>
        <a href=${element.html_url} target="_blank">Repositório</a>
      </li>
      `)
  });
  }
  
function localInfo (){
const user = JSON.parse(localStorage.getItem('users'))
const repos = JSON.parse(localStorage.getItem('repos'))
render(user,repos)
}
localInfo()
function buttonProfile (){
  const buttonChange = document.querySelector('#profile__button')
  console.log(buttonChange)
  buttonChange.addEventListener('click',()=>{
    location.replace('../../')
  })
}
buttonProfile()
