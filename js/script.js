/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


 /**
  * Quotes Array 
  * @property {String}           Quote     - The quote 
  * @property {String}           Source    - The author
  * @property {String}           Citation  - reference to a book
  * @property {int}              Year      - Year quote was recorded
  * @property {Array of String}  Tags      - Tags are keywords  
  * 
  * @property Quote, Source - Must be never be equal to null 
  * @property Citation, Year, Tags - Optional can be equal to null and/or not listed in entry
  */
const quotes = [
  {
    quote: 'Happy Hunger Games! And may the odds be ever in your favor.',
    source: 'Suzanne Collins',
    citation: 'The Hunger Games',
    tags: ['#Novelist']
  },
  {
    quote: "Don't count the days, make the days count",
    source: 'Muhammad Ali',
    tags: ['#Famous_People', '#Sports_Star', '#Motivational']
  },
  {
    quote: "It always seems impossible until it's done.",
    source: 'Nelson Mandela',
  },
  {
    quote: "If you don't stand for something, you will fall for anything.",
    source: 'Peter Marshall',
  },
  {
    quote: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends",
    source: 'J.K. Rowling',
    citation: "Harry Potter & the Philosopher's Stone",
    year: 1997,
    tags: ['#Novelist']
  },
  {
    quote: 'Happiness can be found even in the darkest of times, if one only remembers to turn on the light.',
    source: 'J.K. Rowling',
    citation: 'Harry Potter & the Prisoner of Azkaban',
    year: 1999,
    tags: ['#Novelist']
  },
  {
    quote: 'Those who don’t believe in magic will never find it',
    source: 'Ronald Dahl',
    citation: 'The Minpins',
    year: 1991,
    tags: ['#Novelist']
  },
  {
    quote: 'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times, I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.',
    source: 'Michael Jordan',
    tags: ['#Famous_People', '#Sports_Star', '#Motivational']
  },
  {
    quote: 'Be yourself and people will like you',
    source: 'Jeff Kinney',
    citation: 'Diary of a Wimpy Kid',
    year: 2007,
    tags: ['#Novelist']
  },
  {
    quote: "I can accept failure, everyone fails at something. But I can’t accept not trying.",
    source: 'Michael Jordan',
    tags: ['#Famous_People', '#Sports_Star', '#Motivational']
  },
  {
    quote: "Success is a lousy teacher. It seduces smart people into thinking they can't lose",
    source: 'Bill Gates',
  },
  {
    quote: 'Be the change you want to see in the World',
    source: 'Mahatma Gandhi',
    tags: ['#Spiritual'],
  },
  {
    quote: 'When you can’t find someone to follow, you have to find a way to lead by example.',
    source: 'Roxane Gay',
    citation: 'Bad Feminist',
    year: 2014,
    tags: ['#Novelist']
  },
  {
    quote: 'Hoping for the best, prepared for the worst, and unsurprised by anything in between.',
    source: 'Maya Angelou',
    citation: 'I Know Why the Caged Bird Sings',
    year: 1964,
    tags: ['#Novelist', '#Poet']
  },
  {
    quote: "Have no fear of perfection, you'll never reach it.",
    source: 'Salvador Dali',
    tags: ['#Artist'],
  },
  {
    quote: 'I am not strange. I am just not normal',
    source: 'Salvador Dali',
    tags: ['#Artist'],
  },
  {
    quote: 'I never lose. I either win or learn.',
    source: 'Nelson Mandela',
  },
  {
    quote: 'We believe in ordinary acts of bravery, in the courage that drives one person to stand up for another.',
    source: 'Veronica Roth',
    citation: 'Divergent',
    year: 2011,
    tags: ['#Novelist']
  },
  {
    quote: 'There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.',
    source: 'Sarah Dessen',
    citation: 'The Truth About Forever',
    year: 2006,
    tags: ['#Novelist']
  },
  {
    quote: 'Even the darkest night will end and the sun will rise.',
    source: 'Victor Hugo',
    citation: 'Les Misérables',
    year: 2013,
    tags: ['#Musical']
  },
  {
    quote: 'It’s hard to beat a person who never gives up.',
    source: 'Babe Ruth',
    tags: ['#Famous_People', '#Sports_Star', '#Motivational']
  },
  {
    quote: 'Do one thing every day that scares you.',
    source: 'Eleanor Roosevelt',
    tags: ['#Famous_People', '#Motivational']
  }];
  

  
  /**
   * getRandomColour function
   * @param {*} max 
   */
  function getRandomColor()
  {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
  
  /**
   * This function will generate a random number which will be used to display a 
   * random quote on the website
   * 
   * @param {This parameter is the array length of the quotes array} max 
   */
  const getRandomQuote = max => Math.floor(Math.random() * Math.floor(max));
  let quoteIndex = getRandomQuote(quotes.length);

  /***
   * `printQuote` function
   ***/
  function printQuote()
  {
    let quote = quotes[(getRandomQuote(quotes.length))];
    let html = ``;
    html += `
      <p class="quote">${quote.quote}</p>
      <p class="source">${quote.source} 
      `;
    if (quote.citation != undefined)
    {
      html += `<span class="citation">${quote.citation}</span>`
    }
    if (quote.year != undefined)
    {
      html += `<span class="year">${quote.year}</span>`
    }
    if (quote.tags != undefined)
    {
      html += `<span class="tags">${quote.tags.join(', ')}</span>`
    }
    html += '</p>';
    getRandomColor();
    document.getElementById('quote-box').innerHTML = html;
  }
  
  var intervalID = window.setInterval(updateQuote, 10000);
  
  function updateQuote()
  {
    printQuote();
    getRandomColor();
  }

  /***
   * click event listener for the print quote button
   * DO NOT CHANGE THE CODE BELOW!!
   ***/
  document.getElementById('load-quote').addEventListener("click", printQuote, false);