class SymbolReplacer {
  constructor(selector, symbols) {
    this.selector = selector;
    this.symbols = symbols;
    this.intervalId = null;
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  replaceSymbols() {
    const elements = document.querySelectorAll(this.selector);

    elements.forEach(element => {
      let text = element.innerHTML;
      const shuffledSymbols = this.shuffle([...this.symbols]);

      const replacedText = text.replace(/(@|#|\$|\*|%)/g, (match) => {
        if (this.symbols.includes(match)) {
          const randomSymbol = shuffledSymbols.shift();
          return randomSymbol;
        }
        return match;
      });

      element.innerHTML = replacedText;
    });
  }

  startReplacing(interval = 1000) {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => this.replaceSymbols(), interval);
  }

  stopReplacing() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

const replacer = new SymbolReplacer('.nda-text', ['@', '#', '$', '*', '%']);
replacer.startReplacing();