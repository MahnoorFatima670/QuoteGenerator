const quotes = [
    {
        text: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },
    {
        text: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },

    {
        text: "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
        author: "Nelson Mandela"
    },

    {
        text: " If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles.",
        author: "    Wayne Dyer  "
    },

    {
        text: "   Do one thing every day that scares you.",
        author: "     Eleanor Roosevelt   "
    },


    {
        text: " I didn't get there by wishing for it or hoping for it, but by working for it.",
        author: "   Estée Lauder "
    },

    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
   
        author: "  Winston Churchill    "
    },

    {
        text: "    Earn your leadership every day.",
        author: "    Michael Jordan    "
    },

];

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", generateQuote);

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
}

// Initial quote generation
generateQuote();
