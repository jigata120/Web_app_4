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





