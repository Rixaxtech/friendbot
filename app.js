const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//
const greetings = ['I\'m good you little piece of love', 'What do you want?', 'Leave me alone' ];
const weather = [
    'If you want to know the weather go ask your smartphone', 'I\'m busy find out yourself'
];
const master = ['The creator is busy right now, go ask Google', 'My creator made me to speak to you', 'She\'s busy right now', 'My creator made me to speak to you. Now I Know why'];
const wishlist = ['I\'d like some legs','I\'d like to meet a tesla bot']

// new speech recognition object
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// This runs when the speech recognition starts
recognition.onstart = function() {
    console.log('I\'m listening. Try speaking into the microphone.');
};

// This runs when the speech recognition service returns result
recognition.onresult = function(event){
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript)
};

//add listener to the btn

btn.addEventListener('click', () => {
    // start recognition
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'Pardon? My creater hasn\'t programmed me to understand this yet or I didn\'t hear you right.';
    document.getElementById('robotID').src = 'https://media.giphy.com/media/1BdJd24oEwvuSvXYb0/giphy.gif'

    if(message.includes('how are you')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;

        document.getElementById('robotID').src = 'https://media.giphy.com/media/urvsFBDfR6N32/giphy.gif'
    }
    if(message.includes('weather')){
        const finalText = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;

        document.getElementById('robotID').src = 'https://media.giphy.com/media/G754O1WLSL4c0/giphy.gif'
    }
    if(message.includes('made')){
        const finalText = master[Math.floor(Math.random() * master.length)];
        speech.text = finalText;

        document.getElementById('robotID').src = 'https://media.giphy.com/media/fwW4KQAoHpRfz9HkgX/giphy.gif'
    }
    if(message.includes('maker')){
        const finalText = master[Math.floor(Math.random() * master.length)];
        speech.text = finalText;

        document.getElementById('robotID').src = 'https://media.giphy.com/media/fwW4KQAoHpRfz9HkgX/giphy.gif'
    }
    if(message.includes('dance')){
        document.getElementById('robotID').src = 'https://media.giphy.com/media/mIZ9rPeMKefm0/giphy.gif';
        speech.text = 'Here you go, can you leave me alone now.'
        
    }
    if(message.includes('game')){
        document.getElementById('robotID').src = 'https://media.giphy.com/media/EizPK3InQbrNK/giphy.gif';
        setTimeout(speech.text = 'I tried',6000)
        speech.text = 'I tried';
    }
    if(message.includes('pose')){
        document.getElementById('robotID').src = 'https://media.giphy.com/media/N8wR1WZobKXaE/giphy.gif';
        speech.text = 'Are you happy now?';
    }
    if(message.includes('wishlist')){
        const finalText = wishlist[Math.floor(Math.random() * wishlist.length)];
        speech.text = finalText;

        document.getElementById('robotID').src = 'https://media.giphy.com/media/Qz2s1pq2y0yQ0/giphy.gif'
    }
    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}