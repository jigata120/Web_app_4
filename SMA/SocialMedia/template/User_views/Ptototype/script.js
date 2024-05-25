let pins = {
	'j9QmMEWmcfo':{
		'title':"SSL, TLS, HTTPS Explained",
		'pins': [
			{
				'time':  5.303975,
				'title': 'Introduction to SSL Introduction to SSL',
				'message': 'Learn about the basics of SSL encryption.'
			},
			{
				'time': 4.242111,
				'title': 'TLS Versions',
				'message': 'Exploring different versions of TLS and their features.'
			},
			{
				'time': 4.242111,
				'title': 'TLS Versions',
				'message': 'Exploring different versions of TLS and their features.'
			},
			{
				'time':  5.303975,
				'title': 'Introduction to SSL Introduction to SSL',
				'message': 'Learn about the basics of SSL encryption.'
			},
			{
				'time': 4.242111,
				'title': 'TLS Versions',
				'message': 'Exploring different versions of TLS and their features.'
			},
			{
				'time': 4.242111,
				'title': 'TLS Versions',
				'message': 'Exploring different versions of TLS and their features.'
			},
			{
				'time':  5.303975,
				'title': 'Introduction to SSL Introduction to SSL',
				'message': 'Learn about the basics of SSL encryption.'
			},
			{
				'time': 4.242111,
				'title': 'TLS Versions',
				'message': 'Exploring different versions of TLS and their features.'
			},
			{
				'time': 4.242111,
				'title': 'TLS Versions',
				'message': 'Exploring different versions of TLS and their features.'
			},
			// Add more pins as needed
		]
	},
	'j3rb5e6jejQ':{
		'title':"SSL, TLS, HTTPS Explained",
		'pins': [
			{
				'time':  125.303975,
				'title': 'Introduction to SSL',
				'message': 'Learn about the basics of SSL encryption.'
			},
			{
				'time': 34.242111,
				'title': 'TLS Versions',
				'message': 'Exploring different versions of TLS and their features.'
			},
			{
				'time': 41.242111,
				'title': 'TLS Versions',
				'message': 'Exploring different versions of TLS and their features.'
			},
			// Add more pins as needed
		]
	}
};

const PlayerSm = document.querySelector('.player-sm')
const PlayerSmTitle = document.querySelector('.player-sm-title')


const openTimeline=document.getElementById('openTimeline')
const closeTimeline=document.getElementById('x-closePin')


function launchPinTimeline( ){
pinnedVideoId = Object.keys(videos)[currentlyLaunchedVideo]
loadPins(pinnedVideoId)
closeTimeline.click()
}

function loadPins(videoId){

const containerCardsChildrens= document.querySelectorAll('#cardsTimeline > *')
containerCardsChildrens.forEach(element => {
	  element.remove();
  });
const containerChildrens= document.querySelectorAll('#containerLineDot > *')
containerChildrens.forEach(element => {
	  element.remove();
  });

const container = document.getElementById('containerLineDot');


function sortPins(videoId){
return pins[videoId].pins.sort((a, b) => a.time - b.time);
}
sortedPins = sortPins(videoId)
for (let index = 0; index < sortedPins.length; index++) {
const pin = sortedPins[index];
if (index ==0){
  createInititalDot()
  createCard(pin['time'],pin['title'],pin['message'])
}else{
  createLineAndDot()
  createCard(pin['time'],pin['title'],pin['message'])
}


}

console.log(sortedPins)


function createInititalDot(){
const dot = document.createElement('div');
dot.classList.add('dot');
container.appendChild(dot);
}

function createLineAndDot() {
  const line = document.createElement('div');
  line.classList.add('line');

  const dot = document.createElement('div');
  dot.classList.add('dot');


  container.appendChild(line);
  container.appendChild(dot);
}
function formatTime(time) {
let minutes = Math.floor(time / 60);
let seconds = Math.ceil(time % 60);
return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}
function createCard(time,title,message) {
  const card = document.createElement('div');
  card.classList.add('cardPin');

  const h4 = document.createElement('h4');
  h4.textContent = formatTime(time);

  const p = document.createElement('p');
  p.innerHTML = title;

  card.appendChild(h4);
  card.appendChild(p);

  const container = document.getElementById('cardsTimeline');
  container.appendChild(card);
}
}





function addPin(pinnedVideoId, pinTitle, pinMessage, pinTime) {
// Check if the pinnedVideoId exists in pins
if (!pins.hasOwnProperty(pinnedVideoId)) {
	pins[pinnedVideoId] = {
		'title': "",
		'pins': []
	};
}

// Add the new pin object
pins[pinnedVideoId].pins.push({
	'time': pinTime,
	'title': pinTitle,
	'message': pinMessage
});

 
}

function handleAddPin(){
pinnedVideoId = Object.keys(videos)[currentlyLaunchedVideo]
pinTitle = titleInputPin.value
pinMessage = messageTextareaPin.value
pinTime = timeNow2
addPin(pinnedVideoId,pinTitle,pinMessage,pinTime)
console.log(pins)
loadPins( pinnedVideoId)
closeTimeline.click()
openTimeline.click()
}

const modalPinTime = document.querySelector('#exampleModalLabel2 span');
const titleInputPin = document.getElementById('recipient-name2');
const messageTextareaPin = document.getElementById('message-text2');
function handleModalPinClose(){
if (player){
  if (player.getPlayerState() != YT.PlayerState.PLAYING) {
	  playBtn.click();
  } 
}
titleInputPin.value=''
messageTextareaPin.value=''
}

function handlePin(){
modalPinTime.textContent = formatTime(timeNow2);
if (player){
  if (player.getPlayerState() == YT.PlayerState.PLAYING) {
	playBtn.click();
  }
}
// Object.keys(videos)[currentlyLaunchedVideo]
}

let player;
let playerReady = false;

function changeVideoQuality(quality) {
if (player) {
	player.setPlaybackQuality(quality);
}
}

// Get all radio inputs
// const qualityRadios = document.querySelectorAll('quality input[name="quality-radio"]');

// // Add event listener to each radio input
// console.log(  `objs${qualityRadios.length}`)
// qualityRadios.forEach(function(radio) {
//     radio.addEventListener('change', function() {
//         if (this.checked) {
//             const quality = this.value;
//             changeVideoQuality(quality);
//         }
//     });
// });
console.clear();
function changeStartBtnSmState(){
const playBtnIsActive = playBtn.classList.contains('pause');
const playBtnSmIsActive = playBtnSm.classList.contains('active');

if (playBtnSm!==playBtn){
playSm()
console.log(playBtnIsActive)
console.log(playBtnSmIsActive)


console.log('changing the sm state')

}
}
const playBtnSm = document.getElementById('play-sm');
const controlPanel = document.getElementById('control-panel');
const infoBar = document.getElementById('info');
const summeryBtn = document.getElementById('summary');
const TrendHarthBtns = document.querySelectorAll('.bi-heart');
const TrendBookmarkBtns = document.querySelectorAll('.bi-bookmark');


TrendHarthBtns.forEach(element => {
	element.addEventListener('click',()=>{
		element.classList.toggle('active');
	})
});
 
TrendBookmarkBtns.forEach(element => {
	element.addEventListener('click',()=>{
		element.classList.toggle('active');
	})
});
 


// const prevBtn =document.getElementById('prevBnt');
// const nextBtn =document.getElementById('nextBnt');
function playerSmPrev(){
prevBtn.click()
}
function playerSmNext(){
nextBtn.click()
}


function playSm() {
Array.from(controlPanel.classList).find(function(element) {
return element !== "active" ? controlPanel.classList.add('active') : controlPanel.classList.remove('active');
});

Array.from(infoBar.classList).find(function(element) {
return element !== "active" ? infoBar.classList.add('active') : infoBar.classList.remove('active');
});
}

function playbyTheMainBtn() {
playBtn.click();

// Add any additional functionality here
}

playBtnSm.addEventListener('click',playbyTheMainBtn);


// class musicPlayer {
// 	constructor() {
// 		this.play = this.play.bind(this);
// 		this.playBtnSm = document.getElementById('play-sm');
// 		this.playBtnSm.addEventListener('click', this.play);
// 		this.controlPanel = document.getElementById('control-panel');
// 		this.infoBar = document.getElementById('info');
// 	}
//    playSm(params) {
//     let controlPanelObj = this.controlPanel,
// 		infoBarObj = this.infoBar
// 		Array.from(controlPanelObj.classList).find(function(element){
// 					return element !== "active" ? controlPanelObj.classList.add('active') : 		controlPanelObj.classList.remove('active');
// 			});
	
// 		Array.from(infoBarObj.classList).find(function(element){
// 					return element !== "active" ? infoBarObj.classList.add('active') : 		infoBarObj.classList.remove('active');
// 			});
//   }
// 	play() {
//     playBtn.click()
// 		this.playSm()
//       // if (){

//       // }
// 	}
// }

// const newMusicplayer = new musicPlayer();




//display
// document.querySelector('#display').addEventListener('click', function() {
//   let playerElement = document.querySelector(".player #player");


//   if (playerElement.style.display === "none") {
//     playerElement.style.display = "block";
// } else {
//   playerElement.style.display = "none";
// }
// });

function displayPlayer(){

}
//volume
function onPlayerReady(event) {
playerReady = true;
updatePlayPauseButton(); // Initialize play/pause button
player.setVolume(50); // Set the initial volume to 100%
}

// document.getElementById('volumeControl').addEventListener('input', function() {
//   let volume = this.value;
//   player.setVolume(volume);
// });
// volume


// button state
function onPlayerReady(event) {
playerReady = true;
player.playVideo();
	 // Initialize the button state based on the player state
updatePlayPauseButton();
}

function onPlayerStateChange(event) {
updatePlayPauseButton();
if (event.data === YT.PlayerState.ENDED) {
// Video has ended
console.log(isRepeating)
if(isRepeating){
	player.seekTo(0);
}else{
	console.log("Video has ended");
}
summeryBtn.click()

 
// You can perform any actions here, such as loading a new video or displaying a message
}
}
// button state


//upgrade button visual state
// function updatePlayPauseButton() {
//   let button = document.getElementById('playPauseButton');
//   if (player.getPlayerState() == YT.PlayerState.PLAYING) {
//     button.classList.remove('play');
//     button.classList.add('pause');
//   } else {
//     button.classList.remove('pause');
//     button.classList.add('play');
//   }
//}
// let button = document.querySelector('.play');
function updatePlayPauseButton() {

if (player.getPlayerState() == YT.PlayerState.PLAYING) {
// music.play();
	playBtn.className = 'pause'
	playBtn.innerHTML = '<i class="material-icons">pause</i>'
	controlPanel.classList.add('active')
	infoBar.classList.add('active')

	
} else {
	// music.pause();
	playBtn.className = 'play'
	playBtn.innerHTML = '<i class="material-icons">play_arrow</i>'
	controlPanel.classList.remove('active')
	infoBar.classList.remove('active')
  }

}
// upgrade button visual state

//#######################################################################################
//#######################################################################################
// player
let music = document.querySelector('.music-element')
let playBtn = document.querySelector('.playBtn')
let seekbar = document.querySelector('#seekbar')
let seekbarSm = document.querySelector('#seekbarSm')
let currentTimeElement = document.querySelector('.current-time')
let duration = document.querySelector('.duration')

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// like
let favIcon = document.querySelector('.favorite')
function handleFavorite() {
favIcon.classList.toggle('active');
} 