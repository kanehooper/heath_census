const searchBtn = document.getElementById('search_btn')
const clearBtn = document.getElementById('clear_btn')
const searchBar = document.getElementById('search_bar')

searchBtn.addEventListener('click', async () => {
  const searchValue = searchBar.value

  const response = await fetch('/travel_recommendation_api.json')
  const recommendations = await response.json()

  if (searchValue === 'beach') {
    const beaches = recommendations.beaches
    for (const beach of beaches) {
      console.log(beach)
      // Create a new card element with the beach.image at the top underneath beach.name in bold and then beach.description
      const card = document.createElement('div')
      card.classList.add('card')

      const image = document.createElement('img')
      image.src = beach.imageUrl
      card.appendChild(image)

      const name = document.createElement('h2')
      name.innerText = beach.name
      name.style.fontWeight = 'bold'
      card.appendChild(name)

      const description = document.createElement('p')
      description.innerText = beach.description
      card.appendChild(description)

      // Append the card to a container element
      const container = document.getElementById('container')
      container.appendChild(card)
    }
  }
})

clearBtn.addEventListener('click', () => {
  searchBar.value = ''
})
