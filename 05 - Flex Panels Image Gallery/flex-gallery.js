const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
    console.log('HEY');
}

function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('openActive');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
    
