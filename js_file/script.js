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
})

// =============marketing section 1=========
// get data
fetch('/js_file/marketing-data.json')
  .then((res) => res.json())
  .then((data) => marketingUI(data))

// marketing section ui
function marketingUI(items) {
  // marketing section 1
  const section1Div = document.querySelector('.marketing-section-1')
  for (item of items.slice(0, 2)) {
    let div = document.createElement('div')
    div.className = 'section1-content'
    div.innerHTML = `<img class="section1-img" src="images/${item.img}" alt="" />
    <div class="section-text">
      <p class="section-name">${item.name}</p>
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
  for (item of items.slice(2, items.length)) {
    let div = document.createElement('div')

    div.innerHTML = `<img class="section2-img" src="images/${item.img}" alt="" />
    <div class="section2-text">
      <p class="section-name">${item.name}</p>
      <h2 class="section2-description">
        ${item.description}
      </h2>
      <p class="date">${item.date}</p>
    
    </div>
          `
    section2Div.appendChild(div)
  }
}
marketingUI()
