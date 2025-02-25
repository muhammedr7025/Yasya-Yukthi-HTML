document.querySelectorAll('.sponsor-box').forEach((box, index) => {
    box.style.setProperty('--i', index);
});

// document.getElementById('desktopbody').

function handleScreenSize() {
    const desktopBody = document.getElementById('desktopbody');
    const width = window.innerWidth;

    if (width <= 700) {
        // Hide desktop version
        if (desktopBody) {
            desktopBody.style.display = 'none';
            // Load mobile version
            window.location.href = 'mobileindex.html';
        }
    } else {
        // Show desktop version
        if (desktopBody) {
            desktopBody.style.display = 'block';
        }
    }
}

// Add event listeners
window.addEventListener('load', handleScreenSize);
window.addEventListener('resize', handleScreenSize);