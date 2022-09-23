//The Goal is create a Score board with Home and Guest point trackers.
//Both home and guest point trackers will have their own +1, +2, and +3 increment buttons

//First step is figure out the logic using only the console then we can implament it with
//HTML and CSS

//Create a variable to store the Home points
//Create a variable to store the Guest points
let homePoints = 0 
let guestPoints = 0
//Access to the HTML Point Elements
let homePointsEl = document.getElementById('home-points-el') 
let guestPointsEl = document.getElementById('guest-points-el')

//Create Functions to add a +1, +2, or +3

//Point adders for Home
 function plusOneHome(){
    homePoints +=1
    homePointsEl.textContent = homePoints 
 }
 function plusTwoHome(){
    homePoints +=2
    homePointsEl.textContent = homePoints 
 }
 function plusThreeHome(){
    homePoints +=3
    homePointsEl.textContent = homePoints 
 }

//Point adders for Guest
 function plusOneGuest(){
    guestPoints +=1
    guestPointsEl.textContent = guestPoints 
 }
 function plusTwoGuest(){
    guestPoints +=2
    guestPointsEl.textContent = guestPoints
 }
 function plusThreeGuest(){
    guestPoints +=3
    guestPointsEl.textContent = guestPoints
 }
 
function resetGame(){
    homePoints = 0
    guestPoints = 0
    homePointsEl.textContent = guestPoints
    guestPointsEl.textContent = homePoints
}


//I attemped to create a generic function for the +1, +2, or +3 but could not figure out how to implament it or if this approach would even work. Would love to hear your thoughts on this. Thanks! :)

function pointAdder(team, numberOfPoints){
    if(numberOfPoints == 1){
        team += 1
    }
    if(numberOfPoints == 2){
        team += 3
        return team
    }
    if(numberOfPoints == 3){
        team += 3
        return team
    }
}  