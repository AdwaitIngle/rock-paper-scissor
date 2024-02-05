var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissor = document.getElementById('scissor')
var computer = document.getElementById('pcOption')
var me = document.getElementById('myOption')
var result = document.getElementById('result')
console.log(computer)
var para = document.getElementById('para')
rock.addEventListener('click',function(){
   
    var temp = random_items(items)

    computer.textContent = 'Computer: '+ temp
    me.textContent = 'Me: '+ items[0]
    if(temp === items[0]){
        result.textContent = 'Draw'
        result.style.color = 'grey'
        para.style.backgroundColor = '#e5e5e5'

        
    }
    else if(temp === items[1]) {

        result.textContent = 'You Lose'
        result.style.color = 'red'
        para.style.backgroundColor = '#ffdde0'

    }
    else{
        result.textContent = 'You Won'
        result.style.color = 'green'
        para.style.backgroundColor = '#cefdce'

    }
})
paper.addEventListener('click',function(){
    let temp = random_items(items)

    computer.innerHTML = 'Computer: '+ temp
    me.innerHTML = 'Me: '+ items[1]
    if(temp === items[0]){
        result.textContent = 'You Won'
        result.style.color = 'green'
        para.style.backgroundColor = '#cefdce'

    }
    else if(temp === items[1]) {
        result.textContent = 'Draw'
        result.style.color = 'grey'
        para.style.backgroundColor = '#e5e5e5'

    }
    else{
        result.textContent = 'You Lose'
        result.style.color = 'red'
        para.style.backgroundColor = '#ffdde0'

    }
})
scissor.addEventListener('click',function(){
    var temp = random_items(items)

    computer.textContent = 'Computer: '+ temp
    me.textContent = 'Me: '+ items[2]

    if(temp === items[0]){
        result.textContent = 'You Lose'
        result.style.color = 'red'
        para.style.backgroundColor = '#ffdde0'

    }
    else if(temp === items[1]) {

        result.textContent = 'You Won'
        result.style.color = 'green'
        para.style.backgroundColor = '#cefdce'
    }
    else{
        result.textContent = 'Draw'
        result.style.color = 'grey'
        para.style.backgroundColor = '#e5e5e5'

    }
    
})
function random_items(items){
    return items[Math.floor(Math.random()*items.length)]
}

var items = ['Rock','Paper','Scissor']

console.log(random_items(items))


