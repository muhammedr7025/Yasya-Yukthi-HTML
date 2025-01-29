document.querySelectorAll('.frame, .property-default-wrapper').forEach(element => {
    element.addEventListener('mouseenter', () => {
        if (element.classList.contains('frame')) {
            element.querySelector('.div').classList.remove('default');
            element.querySelector('.div').classList.add('variant-2');
        } else {
            element.querySelector('.text-wrapper-4').classList.remove('property-1-default');
            element.querySelector('.text-wrapper-4').classList.add('property-1-variant-2');
        }
    });

    element.addEventListener('mouseleave', () => {
        if (element.classList.contains('frame')) {
            element.querySelector('.div').classList.remove('variant-2');
            element.querySelector('.div').classList.add('default');
        } else {
            element.querySelector('.text-wrapper-4').classList.remove('property-1-variant-2');
            element.querySelector('.text-wrapper-4').classList.add('property-1-default');
        }
    });
});