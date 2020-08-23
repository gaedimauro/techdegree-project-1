/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/**
 * Quotes Array 
 * This is an array of objects which in this case is quotes 
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
    quote: "We are only as strong as we are united, as weak as we are divided.",
    source: 'J.K. Rowling',
    citation: "Harry Potter & the Goblet of Fire",
    year: 2000,
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
    quote: "It is the quality of one’s convictions that determines success, not the number of followers.",
    source: 'J.K. Rowling',
    citation: 'Harry Potter & the Deathly Hallows',
    year: 2007,
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
   * @property {int} intervalID - Javascript provided function
   *
   * The setInterval() method calls a function or evaluates an expression at specified intervals 
   * (in milliseconds).
   * 
   * 1000 ms = 1 second. 
   * 10000ms = 10seconds
   */
  var intervalID = window.setInterval(updateQuote, 10000);

  /**
   * randomizeBackgroundColor() Function
   * This function generates 3 random numbers, which is then used to creat a RGB
   * numbers which then changes the color of the index.html 
   *      
   * @property {int} Red   - Stores the random number generated for red 
   * @property {int} Green - Stores the random number generated for green 
   * @property {int} Blue  - Stores the random number generated for blue  
   *
   * Function generates random values for red, green and blue then 
   * uses it to change background color of index.html 
   *  
   */
  function randomizeBackgroundColor()
  {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }

  /**
   * getRandomNumber() Function  
   * 
   * This function gets a random number which will be used to om getRandomQuote(arr)
   *  
   * @param {int} max - This parameter is the array length of the quotes array 
   */
  const getRandomNumber = max => Math.floor(Math.random() * Math.floor(max));
   
  /**
   * getRandomQuote(arr) Function  
   * 
   * @param {array} arr - This parameter is the array of quotes 
   * 
   * This function calls the 
   * getRandomNumber()  - calls the getRandomNumber() Function
   *   
   * This random number is used to get a random quote from quotes array and 
   * return a quote 
   * 
   * Function calls getRandomNumber(), which generates a random number and then is used to getRandomQuote()
   * which will be used to display a random quote in index.html 
   * 
   * @return {array} quote - This variable is the quote generated
   */
  function getRandomQuote(arr){
    let quote = quotes[getRandomNumber(quotes.length)];
    return quote; 
  }


  /**
   * printQuote() Function 
   * This Function prints the quote to index.html file by using two previous functions
   * to get a random number and using that getting a quote from the array checking all
   * variable and printing the information out accordly
   * 
   * DETAILS OF HOW CODE EXECUTES 
   *  
   * @property {String}           html      
   * Stores the html that is then generated and is then uses javascript provided property
   * HTML DOM innerHTML Property
   * 
   * @property {Quote}            Quote  - object created and stored in quotes array
   * Quote is generated by using function:
   * 
   * getRandomQuote(max) - calls the getRandomQuote 
   * @property {max}  int - quotes.length which is the length of the array
   * another javascript provided function  
   * 
   * Conditional states are used as there are 3 optional fields in the quotes.array
   * 
   * CITITATION  
   * if the array Has value entered at CITATION that value will be entered to the html variable, however if not html remains unaltered   
   * 
   * YEAR  
   * if the array Has value entered at YEAR that value will be entered to the html variable, however if not html remains unaltered   
   * 
   * TAGS
   * if the array Has value entered at TAGS that value will be entered to the html variable, however if not html remains unaltered   
   * 
   * randomizeBackgroundColor()  - calls the randomizeBackgroundColor Function
   * 
   * Then html will be pushed to and replace the current html information
   */
  function printQuote()
  {
    let quote = getRandomQuote(quotes)
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
    randomizeBackgroundColor();
    document.getElementById('quote-box').innerHTML = html;
  }

  /**
   * updateQuote() Function  
   * 
   * This Function updates the quote and get a random color and updates the html color 
   *  
   * DETAILS OF HOW CODE EXECUTES 
   * printQuote()      - calls the printQuote Function 
   * randomizeBackgroundColor  - calls the randomizeBackgroundColor Function
   * 
   * Function calls the above two functions to update the color or the page
   * as well as accessing a new quote from the quote array 
   */
  function updateQuote()
  {
    printQuote();
    randomizeBackgroundColor();
  }

  /**
  click event listener for the print quote button
  DO NOT CHANGE THE CODE BELOW!!
   
  PLEASE NOTE
  I would prefer the below code use updateQuote instead of printQuote, 
  as i currently have to put randomizeBackgroundColor(); Inside printQUote(), which 
  personally i feel is messy code.
  */
 
  document.getElementById('load-quote').addEventListener("click", printQuote, false);