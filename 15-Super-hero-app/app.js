const getHeroBtn = document.querySelector('.getHero')

const SUPERHERO_TOKEN = 6227971313887994
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN }`

const getSuperHero = (id,name) => {
   fetch(`${BASE_URL}/${id}`)
   .then(response => response.json())
   .then(json => {
    console.log(json);
    document.querySelector('body').innerHTML += `<img src="${json.image.url}" height=200 widht=200 />`
   })
    
}
 getSuperHero(60);

getHeroBtn.onclick = () => getSuperHero(SUPERHERO_TOKEN)


