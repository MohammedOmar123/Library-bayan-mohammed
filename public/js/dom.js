const cards = document.querySelector('.suggested-cards')
const renderBooks = (data) => {
cards.innerHTML =""
data.forEach(ele => {
        // card
        const card = document.createElement('div')
        card.classList.add('card')
        // img
        const img = document.createElement('img')
        img.src = ele.img

  
        // card-content
        const cardContent = document.createElement('div')
        cardContent.classList.add('card-content')

        // Title
        const pTitle = document.createElement('h3')
        pTitle.classList.add('title')
        pTitle.textContent = ele.bname
  
  
  
 // button
        const btn = document.createElement('button')
        btn.classList.add('btn')
  

    btn.textContent = ele.cname;
        cardContent.appendChild(pTitle)
        cardContent.appendChild(btn)
  
  
        card.appendChild(img)
        card.appendChild(cardContent)
  
        cards.appendChild(card)
  
      }
    )
  }