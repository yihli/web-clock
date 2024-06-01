class Stopwatch {
    constructor() {
        this.minutes = 0;
        this.seconds = 0;
        this.centiseconds = 0;
        this.intervalId = null;
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

    resetStopwatch() {
        const minutesText = document.getElementById('minutes-text');
        const secondsText = document.getElementById('seconds-text');
        const centisecondsText = document.getElementById('centiseconds-text');

        this.minutes = 0;
        this.seconds = 0;
        this.centiseconds = 0;

        minutesText.innerText = String(stopwatch.minutes).padStart(2, '0');
        secondsText.innerText = String(stopwatch.seconds).padStart(2, '0');
        centisecondsText.innerText = String(stopwatch.centiseconds).padStart(2, '0');
    }

    startStopwatch() {
        const minutesText = document.getElementById('minutes-text');
        const secondsText = document.getElementById('seconds-text');
        const centisecondsText = document.getElementById('centiseconds-text');

        this.intervalId = setInterval(()=> {
            minutesText.innerText = String(stopwatch.minutes).padStart(2, '0');
            secondsText.innerText = String(stopwatch.seconds).padStart(2, '0');
            centisecondsText.innerText = String(stopwatch.centiseconds).padStart(2, '0');

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

    stopStopwatch() {
        clearInterval(this.intervalId);
        console.log("stopped");
    }
    
}

// DOM elements
const startStopButton = document.getElementById('start-stop-button');
const resetLapButton = document.getElementById('reset-lap-button');
const lapTimesContainer = document.querySelector('.lap-times-container');


/* main */

// initialize stopwatch
const stopwatch = new Stopwatch();
let stopwatchIsRunning = false;
let lapCounter = 1;
stopwatch.resetStopwatch();

// event listeners
startStopButton.addEventListener('click', () => {
    if (stopwatchIsRunning) {
        stopwatch.stopStopwatch();
        startStopButton.innerText = 'Start';
        startStopButton.style.backgroundColor = 'lightgreen';
        resetLapButton.innerText = 'Reset';
    } else {
        stopwatch.startStopwatch();
        startStopButton.innerText = 'Stop';
        startStopButton.style.backgroundColor = 'crimson';
        resetLapButton.innerText = 'Lap';
    }

    stopwatchIsRunning = !stopwatchIsRunning;
});

resetLapButton.addEventListener('click', () => {
    if (stopwatchIsRunning) {
        addLapTime();
    } else {
        stopwatch.resetStopwatch();
        lapTimesContainer.innerHTML = '<hr class="lap-time-divider">';
    }
});

const addLapTime = () => {
    const minutes = String(stopwatch.minutes).padStart(2, '0');
    const seconds = String(stopwatch.seconds).padStart(2, '0');
    const centiseconds = String(stopwatch.centiseconds).padStart(2, '0');
    

    lapTimesContainer.innerHTML += `<div class="lap-time">
                                        <span>Lap ${lapCounter}</span>
                                        <span>${minutes}:${seconds}.${centiseconds}</span>
                                    </div>
                                    <hr class="lap-time-divider">`;

    lapCounter++;
};

