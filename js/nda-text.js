function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function replaceSymbols() {
  const elements = document.querySelectorAll(".nda-text");

  elements.forEach(element => {
    let text = element.innerHTML;
    const symbols = ['@', '#', '$', '*', '%'];
    const shuffledSymbols = shuffle([...symbols]);

    const replacedText = text.replace(/(@|#|\$|\*|%)/g, function(match) {
      if (symbols.includes(match)) {
        const randomSymbol = shuffledSymbols.shift();
        return randomSymbol;
      }
      return match;
    });

    element.innerHTML = replacedText;
  });
}

setInterval(replaceSymbols, 1000);