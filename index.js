const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]


function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//

//

// select all bubbles
const bubbles = document.querySelectorAll('.bubble')



// draw bubbles?
function drawBubbles(){
    for(let i = 0; i < images.length; i++){
        bubbles[i].textContent = '○'
    }
    bubbles[currentImg].textContent = '●'
}



    //set start image 0, first to load when we open the page
let currentImg = 0;
    drawBubbles()
const slideShowImage = document.querySelector('.image')
slideShowImage.setAttribute('src', images[currentImg])


//advance or reverse through images using buttons(arrows) and circles
function advanceOne(){
     if(currentImg === images.length-1){
        currentImg = 0
    }
    else{
        currentImg++
    }
    slideShowImage.setAttribute('src', images[currentImg])
    drawBubbles()
}

// previous button event listener
const prevBtn = document.querySelector('.previous')
prevBtn.addEventListener('click', function(e){

     if(currentImg === 0){
        currentImg = images.length-1
    }
    else{
        currentImg--
    }
    slideShowImage.setAttribute('src', images[currentImg])
    drawBubbles()})


    // next button event listener
const nextBtn = document.querySelector('.next')
console.log(nextBtn)
nextBtn.addEventListener('click', function(e){
    advanceOne()
})



for (let i = 0; i < bubbles.length; i++){
    bubbles[i].addEventListener('click', function(e){
    currentImg = parseFloat(bubbles[i].id.slice(-1))
    slideShowImage.setAttribute('src', images[currentImg])
        drawBubbles()
    })
}


// advance through photos automatically each second
            setInterval(advanceOne, 1000) 