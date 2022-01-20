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

// const data = [
//   {
//     id: 0,
//     img: 'img1.png',
//     name: 'sports',
//     description: 'Performance marketing agencies specialize',
//     date: '7 Dec, 2021',
//   },
//   {
//     id: 1,
//     img: 'img2.png',
//     name: 'design',
//     description: 'Digital marketing channels',
//     date: '23 Nov, 2021',
//   },
//   {
//     id: 2,
//     img: 'img3.png',
//     name: 'stories',
//     description: 'Agency is a business you hire to outsource',
//     date: '5 Nov, 2021',
//   },
//   {
//     id: 3,
//     img: 'img4.png',
//     name: 'design',
//     description: 'Outsource your digital marketing efforts',
//     date: '29 Oct, 2021',
//   },
//   {
//     id: 4,
//     img: 'img5.png',
//     name: 'marketing',
//     description: 'Your business with a variety of digital',
//     date: '21 Oct, 2021',
//   },
//   {
//     id: 5,
//     img: 'img6.png',
//     name: 'marketing',
//     description: 'Analytics to track and report on results',
//     date: '17 Nov, 2021',
//   },
//   {
//     id: 6,
//     img: 'img7.png',
//     name: 'branding',
//     description: 'The most well known performance',
//     date: '12 Oct, 2021',
//   },
//   {
//     id: 7,
//     img: 'img8.png',
//     name: 'marketing',
//     description: 'Marketing channels native advertising',
//     date: '9 Oct, 2021',
//   },
// ]

// =============marketing section 1=========

fetch('/js_file/marketing-data.json')
  .then((res) => res.json())
  .then((data) => marketingUI(data))

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
