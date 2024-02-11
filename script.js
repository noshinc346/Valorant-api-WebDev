const baseURL = "https://valorant-api.com/v1/agents"; 
const cards = document.querySelectorAll('.card');
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".img-modal");
const agentImg = document.querySelector(".agentImg")
const closeX = document.querySelector(".close");
const images = document.querySelectorAll(".card img");

const myModalTitle = document.querySelector(".modalTitle");
const description = document.querySelector(".description");
const agentRole = document.querySelector(".agentRole");
const agentAbility1 = document.querySelector(".agentAbility1");
const agentAbility2 = document.querySelector(".agentAbility2");
const agentAbility3 = document.querySelector(".agentAbility3");
const agentAbility4 = document.querySelector(".agentAbility4");
const agentAbilityDesc = document.querySelector(".agentAbilityDesc");
const agentAbilityDesc2 = document.querySelector(".agentAbilityDesc2");
const agentAbilityDesc3 = document.querySelector(".agentAbilityDesc3");
const agentAbilityDesc4 = document.querySelector(".agentAbilityDesc4");

const boxOne = document.querySelector(".box-one"); 
const boxTwo = document.querySelector(".box-two"); 
const boxThree = document.querySelector(".box-three"); 
const boxFour = document.querySelector(".box-four"); 


const characters = []

fetch(baseURL)
.then( (res) => res.json())
.then ((res) => {
    for ( let i = 0; i < 24; i++) {
        characters.push(res.data[i].displayName)
    };
    console.log(characters);
    let charInfo = res.data;
    console.log(charInfo)

    // 1) fetch data // 2) push data into characters array


    // 3) find object based on clicked name
    cards.forEach((card) => { 
        card.addEventListener("click", (e) => {
            let cardName = (e.target.dataset.name) //click and displays agent name
            console.log(`clicked ${cardName}`) 
            charInfo.forEach((char)=> {  //if the names match display the data
                if (char.displayName === cardName) {
                    console.log(char.description )
                    description.innerText = char.description
                    myModalTitle.innerText = char.displayName
                    agentRole.innerText = `ROLE: ${char.role.displayName}`
                    agentAbility1.innerText = char.abilities[0].displayName
                    agentAbilityDesc.innerText = char.abilities[0].description
                    agentAbility2.innerText = char.abilities[1].displayName 
                    agentAbilityDesc2.innerText = char.abilities[1].description
                    agentAbility3.innerText = char.abilities[2].displayName 
                    agentAbilityDesc3.innerText = char.abilities[2].description
                    agentAbility4.innerText = char.abilities[3].displayName 
                    agentAbilityDesc4.innerText = char.abilities[3].description
                    agentImg.src = char.fullPortraitV2
                    imgModal.appendChild(agentImg)

                    console.log(char.backgroundGradientColors[0].slice(0, 6))
                    modal.style.backgroundColor = `#${char.backgroundGradientColors[3].slice(0, 6)}`

                    boxOne.style.backgroundColor = `#${char.backgroundGradientColors[0].slice(0, 6)}95`
                    boxTwo.style.backgroundColor = `#${char.backgroundGradientColors[1].slice(0, 6)}95`
                    boxThree.style.backgroundColor = `#${char.backgroundGradientColors[2].slice(0, 6)}95`
                    boxFour.style.backgroundColor = '#00000085'

                }
            })
            })
            
        })
    })

// 4) pass data to modal
// 5) display modal
closeX.addEventListener("click", toggleModel)
closeX.addEventListener("mouseover", e => {
  closeX.src = "https://cdn4.iconfinder.com/data/icons/media-controls-4/100/close-512.png"
})
closeX.addEventListener("mouseout", e => {
  closeX.src = "https://e7.pngegg.com/pngimages/691/253/png-clipart-gray-and-black-signage-symbol-logo-circle-font-close-logo-window-thumbnail.png"
})

images.forEach(li => {
  li.addEventListener("click", e => {
    // setModal()
    toggleModel(e)
  })
})

function toggleModel(e) {
  modal.classList.toggle("hidden")
}

function setModal(charInfo) {
    // myModalTitle.innerText = 
}