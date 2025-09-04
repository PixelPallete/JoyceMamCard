// Teacher's Day Greeting Card JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Teacher\'s Day Greeting Card Loaded!');
    
    // Initialize the greeting card
    initializeCard();
    
    // Set up event listeners
    setupEventListeners();
    
    // Start initial animations
    startInitialAnimations();
    
    // Create initial confetti after page load
    setTimeout(() => {
        createConfetti(50);
    }, 2000);
});

function initializeCard() {
    // Add entrance animation to the card
    const card = document.querySelector('.greeting-card');
    if (card) {
        card.classList.add('card-entrance');
    }
    
    // Initialize audio context for better browser compatibility
    initializeAudio();
}

function setupEventListeners() {
    // Celebrate button
    const celebrateBtn = document.getElementById('celebrateBtn');
    if (celebrateBtn) {
        celebrateBtn.addEventListener('click', triggerCelebration);
    }
    
    // Music button
    const musicBtn = document.getElementById('musicBtn');
    if (musicBtn) {
        musicBtn.addEventListener('click', toggleMusic);
    }
    
    // Interactive icons
    const appreciationIcons = document.querySelectorAll('.appreciation-icon');
    appreciationIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            triggerIconCelebration(e.target);
        });
    });
    
    // Card hover effects
    const card = document.querySelector('.greeting-card');
    if (card) {
        card.addEventListener('mouseenter', () => {
            card.classList.add('card-glow');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('card-glow');
        });
    }
}

function startInitialAnimations() {
    // Stagger animation for appreciation icons
    const icons = document.querySelectorAll('.appreciation-icon');
    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.animation = `iconFloat 3s ease-in-out infinite, iconPop 0.5s ease-out`;
            icon.style.animationDelay = `${index * 0.2}s`;
        }, 2000 + (index * 200));
    });
}

function triggerCelebration() {
    console.log('Celebration triggered!');
    
    // Add celebration effect to the card
    const card = document.querySelector('.greeting-card');
    card.classList.add('celebration-pulse');
    
    // Remove the class after animation
    setTimeout(() => {
        card.classList.remove('celebration-pulse');
    }, 600);
    
    // Create lots of confetti
    createConfetti(100);
    
    // Play celebration sound
    playCelebrationSound();
    
    // Trigger appreciation icons animation
    triggerAppreciationIconsAnimation();
    
    // Create floating hearts
    createFloatingHearts();
}

function createConfetti(count = 50) {
    const container = document.getElementById('confetti-container');
    const colors = ['#FFD700', '#FF6B35', '#FF69B4', '#87CEEB', '#32CD32', '#8A2BE2', '#FF7F7F'];
    
    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        container.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 5000);
    }
}

function triggerIconCelebration(icon) {
    // Add special animation to clicked icon
    icon.style.animation = 'none';
    icon.offsetHeight; // Trigger reflow
    icon.style.animation = 'iconFloat 3s ease-in-out infinite, celebrationSpin 1s ease-in-out';
    
    // Create mini confetti around the icon
    const rect = icon.getBoundingClientRect();
    createMiniConfetti(rect.left + rect.width/2, rect.top + rect.height/2);
    
    // Play a small pop sound
    playPopSound();
}

function createMiniConfetti(x, y) {
    const colors = ['#FFD700', '#FF6B35', '#FF69B4', '#87CEEB', '#32CD32'];
    
    for (let i = 0; i < 10; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.position = 'fixed';
        confetti.style.left = x + 'px';
        confetti.style.top = y + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = '6px';
        confetti.style.height = '6px';
        confetti.style.zIndex = '1001';
        
        const angle = (Math.PI * 2 * i) / 10;
        const velocity = 50 + Math.random() * 50;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        confetti.style.animation = `miniConfettiBurst 1s ease-out forwards`;
        confetti.style.setProperty('--vx', vx + 'px');
        confetti.style.setProperty('--vy', vy + 'px');
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 1000);
    }
}

function triggerAppreciationIconsAnimation() {
    const icons = document.querySelectorAll('.appreciation-icon');
    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.animation = 'iconFloat 3s ease-in-out infinite, celebrationBounce 0.8s ease-out';
        }, index * 100);
    });
}

function createFloatingHearts() {
    const hearts = ['💖', '💝', '💕', '💗', '💓'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = window.innerHeight + 'px';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        heart.style.zIndex = '999';
        heart.style.pointerEvents = 'none';
        heart.style.animation = `floatingHearts ${3 + Math.random() * 2}s ease-out forwards`;
        heart.style.animationDelay = Math.random() * 1 + 's';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 6000);
    }
}

// Audio functionality
let audioContext;
let isMusicPlaying = false;

function initializeAudio() {
    // Initialize AudioContext for sound effects
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playCelebrationSound() {
    try {
        // Create a celebration sound using Web Audio API
        if (!audioContext) {
            initializeAudio();
        }
        
        // Create multiple tones for a celebration chord
        const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5
        frequencies.forEach((freq, index) => {
            setTimeout(() => {
                playTone(freq, 0.3, 'sine');
            }, index * 100);
        });
        
        // Add some sparkle with higher frequencies
        setTimeout(() => {
            playTone(1046.50, 0.2, 'triangle'); // C6
        }, 300);
        
    } catch (error) {
        console.log('Audio not supported:', error);
    }
}

function playPopSound() {
    try {
        if (!audioContext) {
            initializeAudio();
        }
        
        playTone(800, 0.1, 'square');
    } catch (error) {
        console.log('Audio not supported:', error);
    }
}

function playTone(frequency, duration, type = 'sine') {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = type;
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

function toggleMusic() {
    const musicBtn = document.getElementById('musicBtn');
    
    if (!isMusicPlaying) {
        startBackgroundMusic();
        musicBtn.innerHTML = '<i class="fas fa-pause me-2"></i>Pause Music';
        musicBtn.classList.add('btn-pause');
        isMusicPlaying = true;
    } else {
        stopBackgroundMusic();
        musicBtn.innerHTML = '<i class="fas fa-music me-2"></i>Play Music';
        musicBtn.classList.remove('btn-pause');
        isMusicPlaying = false;
    }
}

let musicInterval;

function startBackgroundMusic() {
    // Play a simple melody using Web Audio API
    const melody = [
        {freq: 523.25, duration: 0.5}, // C5
        {freq: 587.33, duration: 0.5}, // D5
        {freq: 659.25, duration: 0.5}, // E5
        {freq: 698.46, duration: 0.5}, // F5
        {freq: 783.99, duration: 0.5}, // G5
        {freq: 880.00, duration: 0.5}, // A5
        {freq: 987.77, duration: 0.5}, // B5
        {freq: 1046.50, duration: 1.0}  // C6
    ];
    
    let noteIndex = 0;
    
    musicInterval = setInterval(() => {
        if (isMusicPlaying) {
            const note = melody[noteIndex % melody.length];
            playTone(note.freq, note.duration, 'triangle');
            noteIndex++;
        }
    }, 600);
}

function stopBackgroundMusic() {
    if (musicInterval) {
        clearInterval(musicInterval);
        musicInterval = null;
    }
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes iconPop {
        0% { transform: scale(1); }
        50% { transform: scale(1.3); }
        100% { transform: scale(1); }
    }
    
    @keyframes celebrationSpin {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.2); }
        100% { transform: rotate(360deg) scale(1); }
    }
    
    @keyframes celebrationBounce {
        0%, 100% { transform: translateY(0); }
        25% { transform: translateY(-15px); }
        50% { transform: translateY(-25px); }
        75% { transform: translateY(-10px); }
    }
    
    @keyframes miniConfettiBurst {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--vx), var(--vy)) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes floatingHearts {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .btn-pause {
        background: linear-gradient(135deg, #FF6B35, #FFD700) !important;
    }
`;
document.head.appendChild(style);

// Handle page visibility change to pause music when tab is not active
document.addEventListener('visibilitychange', () => {
    if (document.hidden && isMusicPlaying) {
        // Optionally pause music when tab is not visible
        // stopBackgroundMusic();
    }
});

console.log('Teacher\'s Day Greeting Card JavaScript Loaded Successfully! 🎉');
