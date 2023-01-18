let user_messageDetail = document.querySelector('.user_messageDetail')
let user_message = document.querySelector('.user_message')

user_message.addEventListener('mouseenter',()=>{
  user_messageDetail.classList.remove('hide')
})

user_message.addEventListener('mouseleave',()=>{
  user_messageDetail.classList.add('hide')
})
