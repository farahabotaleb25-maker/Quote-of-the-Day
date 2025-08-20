
const allquotes = [
 "“Be yourself; everyone else is already taken.”",
 "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
 "“You only live once, but if you do it right, once is enough.”",
 "“I solemnly swear that I am up to no good.”",
 "“Never love anyone who treats you like you're ordinary”",
 "“All you need is love. But a little chocolate now and then doesn't hurt”",
 "“The only true wisdom is in knowing you know nothing” ",
 "“Love makes your soul crawl out from its hiding place” ",
 "“I restore myself when I'm alone.” ",
 "“A question that sometimes drives me hazy: am I or are the others crazy?” "

];


   let quotes = [];
  let index = 0;

  function resetQuotes() {

    quotes = [...allquotes].sort(() => Math.random() - 0.5);
    index = 0;
  }

  resetQuotes(); 
  document.getElementById("new-quote").onclick = function () {
    document.getElementById("quote").textContent = quotes[index];
    index++;

    if (index === quotes.length) {
      resetQuotes(); 
    }
  };