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
// settings
let settingsIcon = document.querySelector('.settings')
let speedDivEl = document.querySelector('.speed')
let QualityDivEl = document.querySelector('.quality')
let skipsDivEl = document.querySelector('.skips')
let subsDivEl = document.querySelector('.subs')



const playerOffcanvas = document.getElementById('offcanvasBottom')
function handleSettings() {
	speedDivEl.classList.toggle('active')
	QualityDivEl.classList.toggle('active')

	settingsIcon.classList.toggle('active');
	skipsDivEl.classList.toggle('active');
	subsDivEl.classList.toggle('active');
	if (playerOffcanvas.style.height == '70vh'){
		playerOffcanvas.style.height = '90vh'
	}else{
		playerOffcanvas.style.height = '70vh'
	}
	

}
//subs
function HandleSubs(req) {
if (player) {
if (req) {
  // Turn subtitles on
  console.log('on')
  player.setOption('captions', 'track', true);
} else {
  // Turn subtitles off
  console.log('off')

  player.setOption('captions', 'track', false);
}
}
}

// repeat
let isRepeating = false;
let repIcon = document.querySelector('.repeat')
function handleRepeat() {
isRepeating = !isRepeating; 
if (repIcon.classList.contains('active')) {
   // isRepeating=true 
	repIcon.classList.toggle('active') 
}
else {
	repIcon.classList.toggle('active')
}
}

// volume
let volIcon = document.querySelector('.volume')
let volBox = document.querySelector('.volume-box')
let volumeRange = document.querySelector('.volume-range')
let volumeDown = document.querySelector('.volume-down')
let volumeUp = document.querySelector('.volume-up')

function handleVolume() {
volIcon.classList.toggle('active')
volBox.classList.toggle('active')
}

volumeDown.addEventListener('click', handleVolumeDown);
volumeUp.addEventListener('click', handleVolumeUp);

function handleVolumeDown() {
volumeRange.value = Number(volumeRange.value) - 20
player.setVolume(volumeRange.value)
}
function handleVolumeUp() {
volumeRange.value = Number(volumeRange.value) + 20
player.setVolume(volumeRange.value)
}
volumeRange.addEventListener('input', function() {
let volume = this.value;
player.setVolume(volume);
});
//#######################################################################################
//#######################################################################################

// change the state by click
document.querySelector('.playBtn').addEventListener('click', function() {
if(player){
let state = player.getPlayerState();
if (state == YT.PlayerState.PLAYING) {
  
  player.pauseVideo();
} else {
  player.playVideo();
}

}
});
// change the state by click


//search using form
// document.getElementById('searchButton').addEventListener('click', function(event) {
// event.preventDefault(); // Prevent default form submission
// let query = ''//document.getElementById('searchQuery').value;
// searchYouTubeVideos(query);
// });
//search using form


// search and launch the video
// async function searchYouTubeVideos(query) {
//   await $.ajax({
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     type: 'GET',
//     dataType: 'json',
//     data: {
//       part: 'snippet',
//       q: query,
//       type: 'video',// type: 'playlist',
//       maxResults: 1,
//       key: 'AIzaSyBybF0pQaNpA6oDl3_MTtgZCSZ4TkKN2pE' // Replace with your actual API key
//     },
//     success: function(response) {
//       if (response.items.length > 0) {
//         let videoId = response.items[0].id.videoId;
//         console.log(videoId);
//         loadVideoById(videoId);
//         // onYouTubeIframeAPIReady(videoId)

//         // player.loadVideoById(videoId);
//       }
//     },
//     error: function(response) {
//       loadVideoById('nmrgnA9R1E4')

//       console.error("Search API Request Failed", response);
//     }
//   });
// }
//search and launch the video
let videos = {
'7_LPdttKXPc':"How the Internet Works in 5 Minutes",
'j9QmMEWmcfo':"SSL, TLS, HTTPS Explained",
'htbY9-yggB0':"What Is Web Hosting? Explained",
'Fdnlz4EEP08':"Shaving Tips: How to Shave Your Face",
'y8jPXe4Zu_w':"Stop lasting life by Kevin Hart",
'8Lmp1Ncaa7Y':"Top 10 Interior Design Trends You Need To Know "

};

// document.getElementById('myList').addEventListener('click', function(event) {
//   var clickedElement = event.target; // Get the clicked element
//   var clickedIndex = Array.from(clickedElement.parentNode.children).indexOf(clickedElement);

//   if (clickedIndex === 1) {
//     console.log('The second item was clicked.');
//     // Your code to handle the click on the second item
//   }
// });
let currentlyLaunchedVideo = 1
function launchVideoIfThere(turn){
loadVideoById(Object.keys(videos)[currentlyLaunchedVideo + turn])
currentlyLaunchedVideo = currentlyLaunchedVideo + turn

}
function launchInitialVideo(index){
loadVideoById(Object.keys(videos)[index])
console.log(currentlyLaunchedVideo)
}



nextBtn.addEventListener('click',()=>{
if (Object.keys(videos)[currentlyLaunchedVideo + 1]) {
 launchVideoIfThere(1)
} 
})

prevBtn.addEventListener('click',()=>{
if (Object.keys(videos)[currentlyLaunchedVideo - 1]) {
 launchVideoIfThere(-1)
} 
})

function searchYouTubeVideos(query){
launchInitialVideo(currentlyLaunchedVideo)

}
function launchVideo(videoToLaunch){
loadVideoById(videoToLaunch) 
} 

let playerHeight;
let playerWidth 
// video iframe launch
function onYouTubeIframeAPIReady(videoId){
let playerElement = document.getElementById('player');
player = new YT.Player('player', {
height: playerHeight,
width: playerWidth,  
videoId: videoId,//'vlPgD1y5BBk'
 // Start with an empty video ID or a default one
//  playerVars: {
//   listType: 'playlist',
//   list: playlistId
// },
events: {
  'onReady': onPlayerReady,
  'onStateChange': onPlayerStateChange
}
});
}
// video iframe launch
const PlayerSmImg = document.querySelector('.album-art::before')
const playerTitleEl = document.querySelector('#offcanvasBottomLabel')
function loadVideoById(videoId) {
	PlayerSm.classList.add('show')
// If player is not initialized, initialize it with the video ID
if (!player) {
onYouTubeIframeAPIReady(videoId);
} else {
// If player is already initialized, load the new video
player.loadVideoById(videoId);
}
	playerTitleEl.textContent=videos[videoId]
	PlayerSmTitle.textContent = videos[videoId]
	const PlayerSmImg = document.querySelector('.album-art')
	const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
	PlayerSmImg.style.backgroundImage = `url('${thumbnailUrl}')`;
	console.log(thumbnailUrl)


}
//offcanvas BOOTSTRAP
document.querySelectorAll('[data-bs-toggle="offcanvas"]').forEach(function (button) {
button.addEventListener('click', function () {
  let targetId = this.getAttribute('data-bs-target');
  let targetOffcanvas = document.querySelector(targetId);
  if (targetOffcanvas) {
	let offcanvas = new bootstrap.Offcanvas(targetOffcanvas);
	offcanvas.toggle();
  }
});
});
// dinamic screen lenght

function calculateHeight(width) {
return (width / 16) * 9; // 16:9-ratio
}

let videoDIV = document.querySelector('.player')
let windowWidth =  videoDIV.clientWidth  ;

console.log("Window width:", windowWidth);

window.addEventListener('resize', function() {
videoDIV = document.querySelector('.player')
windowWidth =  videoDIV.clientWidth - 20 ;
setHeight()
});

function setHeight() {
const content = document.getElementById('player');
const width = windowWidth;
const height = calculateHeight(width);
console.log(width , height)
content.style.width = width + 'px';
content.style.height = height + 'px';
playerWidth = width
playerHeight = height
}
setHeight();
// dinamic screen lenght

let skipSeconds = 10;//default
// Function to skip (n) seconds forward
function skipForward() {
if (player && player.getCurrentTime) {
let currentTime = player.getCurrentTime();
player.seekTo(currentTime + skipSeconds, true); // Adding (n) seconds to current time
}
}
function changeSkipSeconds(seconds){
skipSeconds = seconds
}
// Function to skip (n) seconds backward
function skipBackward() {
if (player && player.getCurrentTime) {
let currentTime = player.getCurrentTime();
player.seekTo(currentTime - skipSeconds, true); // Subtracting (n) seconds from current time
}
}

// Example of button click event listeners
// document.getElementById('skipForwardButton').addEventListener('click', skipForward);
// document.getElementById('skipBackwardButton').addEventListener('click', skipBackward);


// ###############################
