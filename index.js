var random_num_1 = Math.round(Math.random()*5 + 1);
var random_num_2 = Math.round(Math.random()*5 + 1);

var dice1 = './images/dice'+random_num_1.toString()+'.png';
var dice2 = './images/dice'+random_num_2.toString()+'.png';

document.querySelector('.img1').setAttribute('src',dice1); 
document.querySelector('.img2').setAttribute('src',dice2); 


if(random_num_1 === random_num_2){
    document.querySelector("h1").innerHTML = 'Draw!';
}
else if(random_num_1 > random_num_2){
    document.querySelector("h1").innerHTML= 'player-1 Win!';
}
else if(random_num_1 < random_num_2){
    document.querySelector("h1").innerHTML = 'player-2 Win!';
}

