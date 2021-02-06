var but1 = document.querySelector('#id1')
var src = ['https://steamcommunity.com/profiles/76561198362615237/',
    'https://github.com/']
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}  
but1.addEventListener('click', function () {
    window.location.href = src[getRandom(0, 2)]
})
var but2 = document.querySelector('#id2')
but2.onclick = function (){
    let a = Math.floor(Math.random() * 3)+1
    if (a==1)
        document.body.style.background ="#ffff00" 
    else if (a ==2) 
        document.body.style.background ="#00ff00" 
     else document.body.style.background ="#ff0000" 
    }  
