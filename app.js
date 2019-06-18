console.log('JS loaded')

const showMoreButton = document.querySelectorAll('.showMore')
const cardInfo = document.querySelectorAll('.card-info')
const cardBasic = document.querySelectorAll('.card-basic')


showMoreButton.forEach((button, index) => {
  button.addEventListener('click', () => {
    toggleCard(index)
  })
})

function toggleCard(index){
  if(cardBasic[index].style.display !== 'none'){
    cardBasic[index].classList.toggle('hidden')
    cardInfo[index].classList.toggle('hidden')
    showMoreButton[index].classList.toggle('topButton')
    showMoreButton[index].classList.toggle('fa-ellipsis-v')
    showMoreButton[index].classList.toggle('fa-times-circle')
  }else{
    cardBasic[index].classList.toggle('hidden')
    cardInfo[index].classList.toggle('hidden')
    showMoreButton[index].classList.toggle('topButton')
    showMoreButton[index].classList.toggle('fa-ellipsis-v')
    showMoreButton[index].classList.toggle('fa-times-circle')
  }
}
