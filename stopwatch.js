class Stopwatch {
    constructor(minutes, seconds, centiseconds) {
        this.minutes = minutes;
        this.seconds = seconds;
        this.centiseconds = centiseconds;
    }

    addCentiseconds() {
        this.centiseconds++;
    }

    addSeconds() {
        this.seconds++;
    }
    
    addMinutes() {
        this.minutes++;
    }

    runTimer() {

        let intervalId = setInterval(()=> {

            this.addCentiseconds();
            if (this.centiseconds == 100) {
                this.centiseconds = 0;
                this.addSeconds();
            }

            if (this.seconds == 60) {
                this.seconds = 0;
                this.addMinutes();
            }

        
        }, 10)
    }
}

const stopwatch = new Stopwatch(0, 0, 0);

self.onmessage = (event) => {
    if 
}

stopwatch.runTimer();
