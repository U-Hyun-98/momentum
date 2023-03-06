const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const quotes = [
  {
    quote: "To be happy, we must not be too concerned with others.",
    author: "Albert Camus",
  },
  {
    quote:
      "Ever tried. Ever failed. No matter. Try Again. Fail agin. Fail better.",
    author: "Samuel Beckett",
  },
  {
    quote: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
  },
  {
    quote: "Victory is sweetest when you've known defeat.",
    author: "Malcolm S. Forbes",
  },
  {
    quote: "We acquire the strength we have overcome.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Loving yourself isn't vanity. It's sanity.",
    author: "Katrina Mayer",
  },
  {
    quote: "I like criticism. It makes you strong.",
    author: "LeBron James",
  },
  {
    quote: "Our strength grows out of our weaknesses.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Happiness depends upon ourselves",
    author: "Aristotle",
  },
  {
    quote: "To fall in love with yourself is the first secret to happiness.",
    author: "Robert Morley",
  },
  {
    quote: "We only see what we know.",
    author: "Goethe",
  },
  {
    quote: "Enjoy when you can, and endure when you must.",
    author: "Goethe",
  },
  {
    quote: "There is more to life than simply increasing its speed.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "The best thing about the future is that it comes one day at a time.",
    author: "Abraham Lincoln",
  },
  {
    quote: "Everything comes to him who hustles while he waits.",
    author: "Thomas Edison",
  },
  {
    quote: "Wish not so much to live long as to live well.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Write injuries in duest, benefits in marble.",
    author: "Benjamin Franklin",
  },
];

const todaysQuotes = quotes[~~(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;