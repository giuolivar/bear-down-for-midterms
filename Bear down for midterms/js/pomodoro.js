document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const timerDisplay = document.querySelector('.timerDisplay');
    const timerButtons = document.querySelectorAll('.timerBtn');
    const startButton = document.querySelector('.actionBtn i.fa-play');
    const startButtonText = startButton.parentElement;
    let timer;
    let timeLeft;
    let currentMode = 'focus';
    let isRunning = false;

    const modes = {
        focus: 25 * 60,
        'short rest': 5 * 60,
        'long rest': 15 * 60
    };

    timerButtons.forEach(button => {
        button.addEventListener('click', () => {
            switchMode(button.textContent.toLowerCase());
        });
    });

    startButtonText.addEventListener('click', () => {
        if (isRunning) {
            pauseTimer();
        } else {
            startTimer();
        }
    });

    function switchMode(mode) {
        currentMode = mode;
        timeLeft = modes[mode];
        updateDisplay();
        updateContext(mode);
        if (isRunning) {
            pauseTimer();
        }
    }

    function startTimer() {
        isRunning = true;
        startButton.classList.remove;
        startButtonText.innerHTML = '<i class="fa-solid fa-pause fa-sm" style="color: #949769;"></i> &nbsp;  pause </button>';

        timer = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft <= 0) {
                clearInterval(timer);
                switchMode(currentMode === 'focus' ? 'short rest' : 'focus');
            }
        }, 1000);
    }

    function pauseTimer() {
        isRunning = false;
        startButton.classList.replace('fa-pause', 'fa-play');
        startButtonText.innerHTML = '<i class="fa-solid fa-pause fa-sm" style="color: #949769;"></i> &nbsp; start';
        clearInterval(timer);
    }

    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function updateContext(mode) {
        body.dataset.contexto = mode.replace(' ', '-');
    }

    // Initialize the timer with the default mode
    switchMode('focus');
});
