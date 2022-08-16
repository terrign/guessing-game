class GuessingGame {
    constructor() {
        this.min = 0
        this.max = 0
        this.try = 0
    }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        this.try = Math.round((this.max + this.min) / 2)
        return this.try
    }

    lower() {
        this.max = this.try
    }

    greater() {
        this.min = this.try
    }
}

const test = new GuessingGame()


module.exports = GuessingGame;
