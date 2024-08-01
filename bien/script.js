const eyeL = document.querySelector('.eyeball-l');
const eyeR = document.querySelector('.eyeball-r');
const handL = document.querySelector('.hand-l');
const handR = document.querySelector('.hand-r');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const eyeLRect = eyeL.getBoundingClientRect();
    const eyeRRect = eyeR.getBoundingClientRect();
    
    const eyeLCenterX = eyeLRect.left + eyeLRect.width / 2;
    const eyeLCenterY = eyeLRect.top + eyeLRect.height / 2;
    const eyeRCenterX = eyeRRect.left + eyeRRect.width / 2;
    const eyeRCenterY = eyeRRect.top + eyeRRect.height / 2;
    
    const angleL = Math.atan2(mouseY - eyeLCenterY, mouseX - eyeLCenterX);
    const angleR = Math.atan2(mouseY - eyeRCenterY, mouseX - eyeRCenterX);
    
    const maxMovement = 5;
    
    eyeL.style.transform = `translate(${Math.cos(angleL) * maxMovement}px, ${Math.sin(angleL) * maxMovement}px)`;
    eyeR.style.transform = `translate(${Math.cos(angleR) * maxMovement}px, ${Math.sin(angleR) * maxMovement}px)`;
});

document.addEventListener('click', () => {
    handL.style.transform = 'rotate(-20deg)';
    handR.style.transform = 'rotate(20deg)';
    
    setTimeout(() => {
        handL.style.transform = 'rotate(0deg)';
        handR.style.transform = 'rotate(0deg)';
    }, 300);
});