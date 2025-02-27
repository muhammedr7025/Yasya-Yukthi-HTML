document.querySelectorAll('.sponsor-box').forEach((box, index) => {
    box.style.setProperty('--i', index);
});

// document.getElementById('desktopbody').

function handleScreenSizeMain() {
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

function handleScreenSizeYukthi() {
    const desktopBody = document.getElementById('page1');
    const width = window.innerWidth;

    if (width <= 700) {
        // Hide desktop version
        if (desktopBody) {
            desktopBody.style.display = 'none';
            // Load mobile version
            window.location.href = 'mobileyukthi.html';
        }
    } else {
        // Show desktop version
        if (desktopBody) {
            desktopBody.style.display = 'block';
        }
    }
}

// Add event listeners
window.addEventListener('load', handleScreenSizeMain);
window.addEventListener('resize', handleScreenSizeMain);
window.addEventListener('load', handleScreenSizeYukthi);
window.addEventListener('resize', handleScreenSizeYukthi);