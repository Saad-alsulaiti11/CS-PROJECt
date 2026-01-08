function showMessage(message) {
    if(!message) message = "Welcome! This website demonstrates HTML, CSS, and JavaScript concepts.";
    alert(message);
}

function toggleInfo(id) {
    const elem = document.getElementById(id);
    elem.classList.toggle('hidden');
}

function changeColor(className, color) {
    const section = document.querySelector('.' + className);
    section.style.backgroundColor = color; // empty string resets to default
}

function parityCheck(bits) {
    let ones = bits.split('').filter(b => b === '1').length;
    if (ones % 2 === 0) alert('Parity OK: No error detected.');
    else alert('Parity Error detected!');
}
