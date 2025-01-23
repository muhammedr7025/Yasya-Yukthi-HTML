document.addEventListener('DOMContentLoaded', function() {
    // Add any interactive features here
    
    // Example: Add animation to the yin-yang symbol
    const yinYang = document.querySelector('.yin-yang');
    if (yinYang) {
        yinYang.style.transition = 'transform 2s ease-in-out';
        
        setInterval(() => {
            yinYang.style.transform = `rotate(${157.37 + 360}deg)`;
            setTimeout(() => {
                yinYang.style.transform = 'rotate(157.37deg)';
            }, 2000);
        }, 4000);
    }
});
