// header part
const navBar = document.querySelector('.menu-part')
const toggleBtn = document.querySelector('.nav-icon')

// toggle button
let clicks = 1
toggleBtn.addEventListener('click', () => {
  if (clicks % 2 == 0) {
    navBar.style.display = 'none'
  } else {
    navBar.style.display = 'block'
  }
  clicks++
  console.log(clicks)
})
