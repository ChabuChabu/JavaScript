let colors = document.querySelectorAll('.color')


let timesClikced ={'red':0, 'yellow':0,'green':0}
//for each loop
colors.forEach(color => {
   color.onclick = () => {
    timesClikced[color.value] += 1;
    color.innerText = timesClikced[color.value]
   }
})



const clearScore = function (){
    timesClikced.red = 0
    timesClikced.yellow = 0
    timesClikced.green = 0
    
    colors.forEach(color => {
        color.innerHTML = ''
    })
}

const clearGame = document.getElementById('clear-game')
clearGame.onclick = () => clearScore()