class TextRotate {
    constructor(element, options = {}) {
        this.element = element;
        this.srElement = document.getElementById('sr-text');
        
        // Default options
        this.options = {
            texts: ['work!', 'fancy ✽', 'right', 'fast', 'fun', 'rock', '🕶️🕶️🕶️'],
            rotationInterval: 2000,
            staggerDuration: 25, // in milliseconds
            staggerFrom: 'last',
            loop: true,
            auto: true,
            splitBy: 'characters',
            onNext: null,
            ...options
        };

        this.currentTextIndex = 0;
        this.isAnimating = false;
        this.intervalId = null;

        this.init();
    }

    splitIntoCharacters(text) {
        if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
            const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
            return Array.from(segmenter.segment(text), ({ segment }) => segment);
        }
        return Array.from(text);
    }

    getElements() {
        const currentText = this.options.texts[this.currentTextIndex];
        
        if (this.options.splitBy === 'characters') {
            const words = currentText.split(' ');
            return words.map((word, i) => ({
                characters: this.splitIntoCharacters(word),
                needsSpace: i !== words.length - 1
            }));
        }
        
        if (this.options.splitBy === 'words') {
            return currentText.split(' ');
        }
        
        if (this.options.splitBy === 'lines') {
            return currentText.split('\n');
        }
        
        return currentText.split(this.options.splitBy);
    }

    getStaggerDelay(index, totalChars) {
        const { staggerFrom, staggerDuration } = this.options;
        const total = totalChars;

        if (staggerFrom === 'first') return index * staggerDuration;
        if (staggerFrom === 'last') return (total - 1 - index) * staggerDuration;
        if (staggerFrom === 'center') {
            const center = Math.floor(total / 2);
            return Math.abs(center - index) * staggerDuration;
        }
        if (staggerFrom === 'random') {
            const randomIndex = Math.floor(Math.random() * total);
            return Math.abs(randomIndex - index) * staggerDuration;
        }
        if (typeof staggerFrom === 'number') {
            return Math.abs(staggerFrom - index) * staggerDuration;
        }
        
        return index * staggerDuration;
    }

    renderText() {
        const elements = this.getElements();
        this.element.innerHTML = '';

        // Update screen reader text
        this.srElement.textContent = this.options.texts[this.currentTextIndex];

        let charIndex = 0;
        const allChars = [];

        if (this.options.splitBy === 'characters') {
            elements.forEach((wordObj, wordIndex) => {
                const wordSpan = document.createElement('span');
                wordSpan.className = 'word-container';

                wordObj.characters.forEach((char, i) => {
                    const charSpan = document.createElement('span');
                    charSpan.className = 'character';
                    charSpan.textContent = char;
                    charSpan.dataset.index = charIndex;
                    
                    wordSpan.appendChild(charSpan);
                    allChars.push(charSpan);
                    charIndex++;
                });

                if (wordObj.needsSpace) {
                    const spaceSpan = document.createElement('span');
                    spaceSpan.className = 'space';
                    spaceSpan.textContent = ' ';
                    wordSpan.appendChild(spaceSpan);
                }

                this.element.appendChild(wordSpan);
            });
        } else {
            elements.forEach((element, i) => {
                const elementSpan = document.createElement('span');
                elementSpan.className = 'word-container';
                
                const charSpan = document.createElement('span');
                charSpan.className = 'character';
                charSpan.textContent = element;
                charSpan.dataset.index = charIndex;
                
                elementSpan.appendChild(charSpan);
                allChars.push(charSpan);
                
                if (i !== elements.length - 1) {
                    const spaceSpan = document.createElement('span');
                    spaceSpan.className = 'space';
                    spaceSpan.textContent = ' ';
                    elementSpan.appendChild(spaceSpan);
                }
                
                this.element.appendChild(elementSpan);
                charIndex++;
            });
        }

        return allChars;
    }

    animateIn(characters) {
        const totalChars = characters.length;
        
        characters.forEach((char, index) => {
            const delay = this.getStaggerDelay(index, totalChars);
            
            setTimeout(() => {
                char.classList.add('animate-in');
            }, delay);
        });
    }

    animateOut(characters, callback) {
        const totalChars = characters.length;
        let completedAnimations = 0;
        
        characters.forEach((char, index) => {
            const delay = this.getStaggerDelay(index, totalChars);
            
            setTimeout(() => {
                char.classList.add('animate-out');
                char.classList.remove('animate-in');
                
                completedAnimations++;
                if (completedAnimations === totalChars && callback) {
                    setTimeout(callback, 300); // Wait for animation to complete
                }
            }, delay);
        });
    }

    handleIndexChange(newIndex) {
        if (this.isAnimating) return;
        
        this.currentTextIndex = newIndex;
        
        if (this.options.onNext) {
            this.options.onNext(newIndex);
        }

        this.updateText();
    }

    updateText() {
        this.isAnimating = true;
        
        const currentCharacters = this.element.querySelectorAll('.character');
        
        if (currentCharacters.length > 0) {
            this.animateOut(Array.from(currentCharacters), () => {
                const newCharacters = this.renderText();
                this.animateIn(newCharacters);
                this.isAnimating = false;
            });
        } else {
            const newCharacters = this.renderText();
            this.animateIn(newCharacters);
            this.isAnimating = false;
        }
    }

    next() {
        const nextIndex = this.currentTextIndex === this.options.texts.length - 1
            ? (this.options.loop ? 0 : this.currentTextIndex)
            : this.currentTextIndex + 1;
        
        if (nextIndex !== this.currentTextIndex) {
            this.handleIndexChange(nextIndex);
        }
    }

    previous() {
        const prevIndex = this.currentTextIndex === 0
            ? (this.options.loop ? this.options.texts.length - 1 : this.currentTextIndex)
            : this.currentTextIndex - 1;
        
        if (prevIndex !== this.currentTextIndex) {
            this.handleIndexChange(prevIndex);
        }
    }

    jumpTo(index) {
        const validIndex = Math.max(0, Math.min(index, this.options.texts.length - 1));
        if (validIndex !== this.currentTextIndex) {
            this.handleIndexChange(validIndex);
        }
    }

    reset() {
        if (this.currentTextIndex !== 0) {
            this.handleIndexChange(0);
        }
    }

    start() {
        if (this.options.auto && !this.intervalId) {
            this.intervalId = setInterval(() => this.next(), this.options.rotationInterval);
        }
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    init() {
        // Initial render
        const initialCharacters = this.renderText();
        this.animateIn(initialCharacters);
        
        // Start auto rotation if enabled
        if (this.options.auto) {
            this.start();
        }
    }

    destroy() {
        this.stop();
        this.element.innerHTML = '';
    }
}

// Initialize the text rotation
document.addEventListener('DOMContentLoaded', () => {
    const textRotateElement = document.getElementById('text-container');
    const textRotate = new TextRotate(textRotateElement, {
        texts: ['work!', 'fancy ✽', 'right', 'fast', 'fun', 'rock', '🕶️🕶️🕶️'],
        rotationInterval: 2000,
        staggerDuration: 25,
        staggerFrom: 'last',
        splitBy: 'characters'
    });

    // Optional: Expose to global scope for manual control
    window.textRotate = textRotate;
});