const player1 = {
     name : 'SCORPION',
     hp : 80,
     img : 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
     weapon : ['Katana','Suriken'],
     attack : function () {console.log(player1.name +' '+'Fight!!!')}
    };
    player1.attack();
    console.log(player1);
const player2 = {
        name : 'SUB-ZERO',
        hp : 30,
        img : 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
        weapon : ['Katana','Suriken'],
        attack : function () {console.log(player2.name +' '+'Fight!!!')}
       };
       player2.attack();
console.log(player2);


function createPlayer(playerClass,playerName) {
const $player = document.createElement('div');
$player.classList.add(playerClass);
const $arenas = document.querySelector('.arenas');
$arenas.appendChild($player);

const $progressbar = document.createElement('div');
$progressbar.classList.add('progressbar');
$player.appendChild($progressbar);

const $character = document.createElement('div');
$character.classList.add('character');
$player.appendChild($character);

const $life = document.createElement('div');
$life.classList.add('life');
$life.style.width = playerName.hp + '%';
$progressbar.appendChild($life);

const $name = document.createElement('div');
$name.classList.add('name');
$name.innerText = playerName.name;
$progressbar.appendChild($name);

const $img = document.createElement('img');
$img.src = playerName.img;
$character.appendChild($img);
};

createPlayer('player1',player1);
createPlayer('player2',player2);
