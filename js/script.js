/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = 
[
  {
    quote:      `Happy Hunger Games! And may the odds be ever in your favor.`,
    source:     'Suzanne Collins',
    citation:   'The Hunger Games',
    // 0 
  },
  {
    quote:      "Don't count the days, make the days count",
    source:     'Muhammad Ali',
    // 1
  },
  {
    quote:      "It always seems impossible until it's done.",
    source:     'Nelson Mandela',
    // 2
  },
  {
    quote:      "If you don't stand for something, you will fall for anything.",
    source:     'Peter Marshall',
    // 3
  },
  {
    quote:      `It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends`,
    source:     'J.K. Rowling',
    citation:   `Harry Potter & the Philosopher's Stone`,
    year:       1997
    // 4
  },
  {
    quote:      `happiness can be found even in the darkest of times, if one only remembers to turn on the light.`, 
    source:     'J.K. Rowling',
    citation:   `Harry Potter & the Prisoner of Azkaban`,
    year:       1999
    // 5
  },
  {
    quote:      `Those who don’t believe in magic will never find it`, 
    source:     'Ronald Dahl',
    citation:   `The Minpins`,
    year:       1991
    //6
  },
  {
    quote:      `I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times, I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.`,
    source:     'Michael Jordan',
    // 7
  },
  {
    quote:      `Be yourself and people will like you`, 
    source:     'Jeff Kinney',
    citation:   `Diary of a Wimpy Kid`,
    year:       2007
    // 8
  },
  {
    quote:      "I can accept failure, everyone fails at something. But I can’t accept not trying.",
    source:     'Michael Jordan',
    // 9
  },
  {
    quote:      `Success is a lousy teacher. It seduces smart people into thinking they can't lose`,
    source:     'Bill Gates',
    // 10
  },
  {
    quote:      `Be the change you want to see in the World`,
    source:     'Mahatma Gandhi',
    // 11
  },
  {
    quote:      `When you can’t find someone to follow, you have to find a way to lead by example.`, 
    source:     'Roxane Gay',
    citation:   `Bad Feminist`,
    year:       2014
    // 12
  },
  {
    quote:      `Hoping for the best, prepared for the worst, and unsurprised by anything in between.`,
    source:     'Maya Angelou',
    citation:   'I Know Why the Caged Bird Sings',
    year:       1964
    // 13
  },
  {
    quote:      `Have no fear of perfection, you'll never reach it.`,
    source:     'Salvador Dali',
    // 14
  },
  {
    quote:      `I am not strange. I am just not normal`,
    source:     'Salvador Dali',
    // 15
  },
  {
    quote:      `I never lose. I either win or learn.`,
    source:     'Nelson Mandela',
    // 16
  },
  {
    quote:      `We believe in ordinary acts of bravery, in the courage that drives one person to stand up for another.`,
    source:     'Veronica Roth',
    citation:   'Divergent',
    year:       2011
    // 17
  },
  {
    quote:      `There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.`,
    source:     'Sarah Dessen',
    citation:   'The Truth About Forever',
    year:       2006
    // 18
  },
  {
    quote:      `Even the darkest night will end and the sun will rise.`,
    source:     'Victor Hugo',
    citation:   'Les Misérables',
    year:       2013
    // 19
  }
];


/***
 * `getRandomQuote` function
***/

/**
 * This function will generate a random number which will be used to display a 
 * random quote on the website
 * 
 * @param {This parameter is the array length of the quotes array} max 
*/
const randomIndex = max => Math.floor(Math.random() * Math.floor(max));

let quoteIndex = randomIndex(quotes.length);

/***
 * `printQuote` function
***/

function printQuote(){

  let quote = quotes[(randomIndex(quotes.length))]; 
  
  let html = ``;

  html += 
    `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source} 
    `;
    if (quote.citation != undefined){
      html += `<span class="citation">${quote.citation}</span>`
    }
    if(quote.year != undefined){
      html += `<span class="year">${quote.year}</span></p>`
    }     
    
    document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);