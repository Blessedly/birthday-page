// 创建金色粒子效果
function createParticles() {
    const particleCount = 30;
    for(let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (8 + Math.random() * 4) + 's';
        document.body.appendChild(particle);
    }
}

createParticles();

// 创建闪烁星星
function createStars() {
    const starCount = 50;
    for(let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (2 + Math.random() * 2) + 's';
        document.body.appendChild(star);
    }
}

createStars();

// 创建光线扫描
function createLightRays() {
    setInterval(() => {
        const ray = document.createElement('div');
        ray.className = 'light-ray';
        ray.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(ray);

        setTimeout(() => ray.remove(), 8000);
    }, 4000);
}

createLightRays();

// 关闭生日祝福弹窗
function closeBirthdayWish() {
    document.getElementById('birthdayWish').classList.add('hidden');
    createConfetti();
}

// 创建五彩纸屑
function createConfetti() {
    const colors = ['#d4af37', '#ff6b35', '#f7931e', '#c41e3a', '#00a8e8', '#6a4c93'];
    for(let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 4000);
        }, i * 30);
    }
}

// 创建气球
function createBalloons() {
    const balloons = ['🎈', '🎉', '🎊', '🎁', '🎀'];
    setInterval(() => {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.textContent = balloons[Math.floor(Math.random() * balloons.length)];
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.animationDuration = (12 + Math.random() * 6) + 's';
        document.body.appendChild(balloon);

        setTimeout(() => balloon.remove(), 15000);
    }, 3000);
}

createBalloons();

// 3秒后自动关闭祝福弹窗并触发纸屑
setTimeout(() => {
    const wishElement = document.getElementById('birthdayWish');
    if(wishElement && !wishElement.classList.contains('hidden')) {
        wishElement.style.animation = 'popIn 0.6s ease-out reverse';
        setTimeout(() => {
            closeBirthdayWish();
        }, 600);
    }
}, 5000);