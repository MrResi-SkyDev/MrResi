function createStars() {
    const starsContainer = document.getElementById('stars');
    const numStars = 150;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star normal';
        
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        star.style.animationDelay = Math.random() * -10 + 's, ' + Math.random() * -2 + 's, ' + Math.random() * -15 + 's';
        star.style.animationDuration = (Math.random() * 5 + 18) + 's, ' + (Math.random() * 1 + 1.5) + 's, ' + (Math.random() * 10 + 12) + 's';
        
        starsContainer.appendChild(star);
    }
}

function addClickEffects() {
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect = btn.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            
            for (let i = 0; i < 12; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.width = '2px';
                particle.style.height = '2px';
                particle.style.background = 'white';
                particle.style.borderRadius = '50%';
                particle.style.pointerEvents = 'none';
                particle.style.zIndex = '1000';
                particle.style.boxShadow = '0 0 8px rgba(255, 255, 255, 0.9)';
                
                document.body.appendChild(particle);
                
                const angle = (Math.PI * 2 * i) / 12;
                const distance = 50 + Math.random() * 30;
                const endX = x + Math.cos(angle) * distance;
                const endY = y + Math.sin(angle) * distance;
                
                particle.animate([
                    { 
                        transform: 'translate(0, 0) scale(1)', 
                        opacity: 1,
                        boxShadow: '0 0 8px rgba(255, 255, 255, 0.9)'
                    },
                    { 
                        transform: `translate(${endX - x}px, ${endY - y}px) scale(0)`, 
                        opacity: 0,
                        boxShadow: '0 0 15px rgba(255, 255, 255, 0)'
                    }
                ], {
                    duration: 700,
                    easing: 'ease-out'
                }).onfinish = () => particle.remove();
            }
        });
    });
}

function init() {
    createStars();
    addClickEffects();
}

document.addEventListener('DOMContentLoaded', init);