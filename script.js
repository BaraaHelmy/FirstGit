quotes = [
    "\"People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you\'re lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.\" - Carrie Ann Moss",
    "\"Life is what happens to us while we are making other plans.\" - Allen Saunders",
    "\"Life isn\'t about finding yourself. Life is about creating yourself.\" - George Bernard Shaw",
    "\"You are the sum total of everything you\'ve ever seen, heard, eaten, smelled, been told, forgot  it\'s all there.\n Everything influences each of us, and because of that I try to make sure that my experiences are positive.\" - Maya Angelou",
    "\"Keep your face always toward the sunshine, and shadows will fall behind you.\" - Walt Whitman",
    "\"Whether you think you can or think you can\'t, you\'re right.\" - Henry Ford",
    "\"Your talent determines what you can do. Your motivation determines how much you\'re willing to do. Your attitude determines how well you do it.\" \-Lou Holtz",
    "\"The happiness of your life depends on the quality of your thoughts.\" - Marcus Aurelius",
    "\"You are who you are meant to be. Dance as if no one\'s watching. Love as if it\'s all you know. Dream as if you\'ll live forever. Live as if you\'ll die today.\" James Dean",
];


function newQuote() {
    var Randomshit = Math.floor(Math.random() * (quotes.length));
    document.getElementById("qute").innerHTML = quotes[Randomshit];
}

