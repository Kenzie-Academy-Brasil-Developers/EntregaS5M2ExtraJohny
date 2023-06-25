function BackToIndex (){
  const backButton = document.querySelector('.error__button')
  backButton.addEventListener('click', ()=>{
    localStorage.clear
    location.replace('../../index.html')
  })
}
BackToIndex()