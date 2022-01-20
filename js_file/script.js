// header part
const navBar = document.querySelector('.menu-part')
const toggleBtn = document.querySelector('.nav-icon')

// toggle button
let clicks = 1
toggleBtn.addEventListener('click', () => {
  if (clicks % 2 == 0) {
    navBar.style.display = 'none'
    navBar.style.opacity = 0
    navBar.style.transition = 'all 1s ease-in-out'
  } else {
    navBar.style.display = 'block'
    navBar.style.opacity = 1
    navBar.style.transition = 'all 1s ease-in-out'
  }
  clicks++
})

// =============marketing section 1=========
// get data
fetch('js_file/marketing-data.json')
  .then((res) => res.json())
  .then((data) => marketingUI(data))

// marketing section ui
function marketingUI(items) {
  if (items.length > 0) {
    // marketing section 1
    const section1Div = document.querySelector('.marketing-section-1')
    for (let item of items.slice(0, 2)) {
      let div = document.createElement('div')
      div.className = 'section1-content'
      div.innerHTML = `<img class="section1-img" src="images/${item.img}" alt="" />
    <div class="section-text">
      <p class="section-name">${item.itemName}</p>
      <h2 class="section-description">
        ${item.description}
      </h2>
      <p class="date">${item.date}</p>
    
    </div>
          `
      section1Div.appendChild(div)
    }
    // marketing section 2
    const section2Div = document.querySelector('.marketing-section-2')
    for (let item of items.slice(2, items.length)) {
      let div = document.createElement('div')

      div.innerHTML = `<img class="section2-img" src="images/${item.img}" alt="" />
    <div class="section2-text">
      <p class="section-name">${item.itemName}</p>
      <h2 class="section2-description">
        ${item.description}
      </h2>
      <p class="date">${item.date}</p>
    
    </div>
          `
      section2Div.appendChild(div)
    }
  } else {
    console.log('loading....')
  }
}
marketingUI()

// ====newsletter email validation=====
const emailInput = document.querySelector('.email-input').value
const validateBtn = document.querySelector('#subscribe-btn')
validateBtn.addEventListener('click', () => {
  console.log('cliked')
  // let reg =
  //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  // console.log(reg.test(String(emailInput).toLowerCase()))
})
