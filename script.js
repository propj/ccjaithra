let conversation = document.getElementById('conversation');
let userInput = document.getElementById('userInput');

let userProfile = {
    name: '',
    hobbies: [],
    favoriteMusic: '',
    favoriteArtist: '',
    pets: '',
    favoriteFood: '',
    vacationDestination: '',
    favoriteBookGenre: '',
    favoriteMovie: '',
    sports: '',
    otherInterests: []
};

const responses = [
    { keywords: ['name'], response: (userInput) => `Nice to meet you, ${userInput.split(' ').pop()}! What's your favorite hobby?` },
    { keywords: ['hobby', 'hobbies'], response: (userInput) => `That sounds fun! What's your favorite type of music?` },
    { keywords: ['music'], response: (userInput) => `I love music too! Who's your favorite artist?` },
    { keywords: ['artist'], response: (userInput) => `Great choice! Do you have any pets?` },
    { keywords: ['pets'], response: (userInput) => `Pets are wonderful! What's your favorite food?` },
    { keywords: ['food'], response: (userInput) => `Yum! I love that too. What's your dream vacation destination?` },
    { keywords: ['vacation', 'destination'], response: (userInput) => `That sounds amazing! Do you enjoy reading books?` },
    { keywords: ['books', 'reading'], response: (userInput) => `Books are a great escape! What's your favorite genre?` },
    { keywords: ['genre'], response: (userInput) => `Nice! Have you watched any good movies lately?` },
    { keywords: ['movies', 'movie'], response: (userInput) => `Movies are fun! What's your favorite movie of all time?` },
    { keywords: ['favorite'], response: (userInput) => `That's a classic! Do you play any sports?` },
    { keywords: ['sports'], response: (userInput) => `Sports are great for staying active! Do you have any other interests?` },
    { keywords: ['interests', 'interest'], response: (userInput) => `Tell me more about it!` }
];

const defaultResponses = [
    "That's interesting! Tell me more!",
    "Really? I'd love to hear more about that.",
    "Oh wow! What else can you tell me?",
    "That's amazing! Can you elaborate?",
    "I see. Do you have any other hobbies or interests?"
];

function sendMessage() {
    let userMessage = userInput.value;
    if (userMessage.trim() !== "") {
        appendMessage('You', userMessage);
        getResponse(userMessage);
        userInput.value = "";
    }
}

function appendMessage(sender, message) {
    let p = document.createElement('p');
    p.textContent = `${sender}: ${message}`;
    conversation.appendChild(p);
    conversation.scrollTop = conversation.scrollHeight;
}

function getResponse(message) {
    let response = generateResponse(message.toLowerCase());
    setTimeout(() => appendMessage('Girlfriend', response), 1000);
}

function generateResponse(message) {
    for (let i = 0; i < responses.length; i++) {
        for (let keyword of responses[i].keywords) {
            if (message.includes(keyword)) {
                updateUserProfile(keyword, message);
                return responses[i].response(message);
            }
        }
    }
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

function updateUserProfile(keyword, message) {
    if (keyword === 'name') {
        userProfile.name = message.split(' ').pop();
    } else if (keyword === 'hobby' || keyword === 'hobbies') {
        userProfile.hobbies.push(message);
    } else if (keyword === 'music') {
        userProfile.favoriteMusic = message;
    } else if (keyword === 'artist') {
        userProfile.favoriteArtist = message;
    } else if (keyword === 'pets') {
        userProfile.pets = message;
    } else if (keyword === 'food') {
        userProfile.favoriteFood = message;
    } else if (keyword === 'vacation' || keyword === 'destination') {
        userProfile.vacationDestination = message;
    } else if (keyword === 'books' || keyword === 'reading') {
        userProfile.favoriteBookGenre = message;
    } else if (keyword === 'movies' || keyword === 'movie') {
        userProfile.favoriteMovie = message;
    } else if (keyword === 'sports') {
        userProfile.sports = message;
    } else if (keyword === 'interests' || keyword === 'interest') {
        userProfile.otherInterests.push(message);
    }
}

function personalizedResponse(message) {
    if (userProfile.name) {
        return `By the way, ${userProfile.name}, ${message}`;
    }
    return message;
}
