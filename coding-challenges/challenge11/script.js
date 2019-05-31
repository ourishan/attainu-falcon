async function fetchData() {
    let data = await fetch('https://api.github.com/users')
    let dataJSON = await data.json()
    return dataJSON
}

function renderCards(data) {
    let root = document.querySelector('.card-columns')
    for(item of data) {
        let card = document.createElement('div')
        card.className = 'card'
        let cardBody = document.createElement('div')
        cardBody.className = 'card-body'
        cardBody.textContent = item.login

        card.appendChild(cardBody)
        root.appendChild(card)
    }    
}

(async ()=>{
    let data = await fetchData()
    renderCards(data)

})()