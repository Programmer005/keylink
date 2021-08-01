const newBtn = document.querySelector(".new-link-btn")
const keylinksList = document.querySelector(".links-container")
const inputs = document.querySelectorAll(".keylink-input")
let keylinks = []

const addNewKeyLink = () => {
  const mainContainer = document.createElement("div")
  mainContainer.classList.add("main-link-container")

  const linkTextbox = document.createElement("input")
  const keywordTextbox = document.createElement("input")

  linkTextbox.classList.add("keylink-input")
  keywordTextbox.classList.add("keylink-input")

  linkTextbox.placeholder = "Add a link"
  keywordTextbox.placeholder = "Keyword"

  mainContainer.appendChild(linkTextbox)
  mainContainer.appendChild(keywordTextbox)

  keylinksList.appendChild(mainContainer)
}

newBtn.addEventListener("click", addNewKeyLink)

//! THIS DOESN'T WORK
//TODO: Add PWA support
//TODO: Add localstorage

const addLocalKeyLinks = () => {
  const linkInput = document.querySelector(".link-input")
  const keywordInput = document.querySelector(".keyword-input")

  console.table([linkInput.value, keywordInput.value])

  keylinks.push({
    link: linkInput.value,
    keyword: keywordInput.value,
  })

  localStorage.setItem("keylinks", JSON.stringify(keylinks))
}

// inputs.forEach((link) => {
//   link.addEventListener("input", () => {
//     addLocalKeyLinks()
//   })
// })

addLocalKeyLinks()
