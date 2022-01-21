// header part
const navBar = document.querySelector('.toggle-menu')
const toggleBtn = document.querySelector('.toggle-show-hide')

// toggle button
let clicks = 1
toggleBtn.addEventListener('click', () => {
  if (clicks % 2 === 0) {
    navBar.style.opacity = 0
    navBar.style.transition = 'all 0.5s ease-in-out'
    toggleBtn.innerHTML = `<svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16px"
                height="14px"
                viewBox="0 0 50 50"
                style="fill: #fff"
              >
                <path
                  d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"
                ></path>
              </svg>`
    document.querySelector('.banner').classList.remove('add-class1')
    document.querySelector('.banner').classList.add('add-class2')
  } else {
    navBar.style.opacity = 1
    navBar.style.transition = 'all 0.5s ease-in-out'
    toggleBtn.innerHTML = `<svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="16px"
              height="14px"
              viewBox="0 0 50 50"
              style="fill: #ffffff"
            >
              <path
                d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"
              ></path>
            </svg>`
    document.querySelector('.banner').classList.add('add-class1')
    document.querySelector('.banner').classList.remove('add-class2')
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
