let orderBtn = document.querySelector('.order-btn')
let orderBtn1 = document.querySelector('.order-btn1')
let telegramLogo = document.querySelector('.tele-logo')
let burger = document.querySelector('.burger-btn')
let menu = document.querySelector('.menu')
let menuItem = document.querySelector('.nav1')
orderBtn.addEventListener('mouseover', function(){
  telegramLogo.style.display = 'flex'
})
orderBtn.addEventListener('mouseout', function(){
  telegramLogo.style.display = 'none'
})
orderBtn1.addEventListener('mouseover', function(){
  telegramLogo.style.display = 'flex'
})
orderBtn1.addEventListener('mouseout', function(){
  telegramLogo.style.display = 'none'
})
burger.addEventListener('click', function(){
  menu.classList.toggle('menu-active')

})
menuItem.addEventListener('click', function(e){
    menu.classList.remove('menu-active')
  
})
