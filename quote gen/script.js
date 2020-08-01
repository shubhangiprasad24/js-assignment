let quotes=[

    'All our dreams can come true, if we have the courage to pursue them. – Walt Disney',
    'The secret of getting ahead is getting started. – Mark Twain',
    'I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed. – Michael Jordan',
    'Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve. – Mary Kay Ash',
    'The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb',
    'It’s hard to beat a person who never gives up. – Babe Ruth',
    'I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.’ – Leah Busque',
    'If people are doubting how far you can go, go so far that you can’t hear them anymore. – Michele Ruiz',
    'We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success. – Arianna Huffington',
    'You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth. ― William W. Purkey',
    'Everything you can imagine is real.― Pablo Picasso',
    'Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers. – Socrates',
    'Do one thing every day that scares you.― Eleanor Roosevelt',
    'Whatever you are, be a good one. ― Abraham Lincoln',
    'Happiness is not something ready made. It comes from your own actions. ― Dalai Lama XIV',
    'Impossible is just an opinion. – Paulo Coelho',
    'Your passion is waiting for your courage to catch up. – Isabelle Lafleche',
    'Magic is believing in yourself. If you can make that happen, you can make anything happen. – Johann Wolfgang Von Goethe',
    'If something is important enough, even if the odds are stacked against you, you should still do it. – Elon Musk',
    'Don’t be afraid to give up the good to go for the great. – John D. Rockefeller',
    'Everything comes to him who hustles while he waits.― Thomas Edison',
    'The cheapest, fastest, and most reliable components are those that aren’t there. - Gordon Bell',
    'Hustle in silence and let your success make the noise. – Unknown',
    'In a gentle way, you can shake the world. – Mahatma Gandhi',
    'We are what we repeatedly do. Excellence, then, is not an act, but a habit. – Aristotle'

];


// let btn=document.querySelector('.btn');
// btn.addEventListener('click', displayQuote);

function displayQuote(){
//create an index of a random number 
//convert it into between 0 to length of quotes[]
let index=Math.floor(Math.random()*quotes.length);

//display the quote of that index
let div=document.querySelector('#quote');
let quote=`<div class="card">
<img src="icons/favicon.png">
<p>${quotes[index]}</p>
<img src="icons/favicon.png">
</div>
`;
div.innerHTML=quote;

}