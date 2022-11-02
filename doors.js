const left = document.getElementById('hehe')
const middle = document.getElementById('nihao')
const right = document.getElementById('scary')
const area = document.getElementById('pooky')
const write = document.getElementById('text')
const tap = document.getElementById('letter')
const re = document.getElementById('fresh')



re.addEventListener("click", refresh)
left.addEventListener("click",function(){
    /// code here


    console.log("I WAS CLICKED");
    document.getElementById("BODY").style.backgroundImage = "url(EDP445.webp)"
    write.style.visibility = 'hidden'
    left.style.visibility = 'hidden'
    right.style.visibility = 'hidden'
    middle.style.visibility = 'hidden'
    tap.textContent = 'you get a cup cake'
    tap.style.background = 'white'
});
middle.addEventListener("click",function(){
    document.getElementById("BODY").style.backgroundImage = "url(tyler.jpg)"
    write.style.visibility = 'hidden'
    middle.style.visibility = 'hidden'
    left.style.visibility = 'hidden'
    right.style.visibility = 'hidden'
    tap.textContent = 'You Win'
    tap.style.background = 'white'
  
  
})

right.addEventListener("click",function(){
    document.getElementById("BODY").style.backgroundImage = "url(pump.webp)"
    write.style.visibility = 'hidden'
    right.style.visibility = 'hidden'
    middle.style.visibility = 'hidden'
    left.style.visibility = 'hidden'
    tap.style.background = 'white'
    tap.textContent = 'You Die'



})

function refresh(){
    location.reload();
}

