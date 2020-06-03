// Switch Function
function testSwitch(size) {
    switch(size) {
        case 'small':
            alert('This chair is too small!');
            // If you don't insert a break after each case, the code will continue to run until it reaches one
            break;
        case 'medium':
            alert('This chair is just right!');
            break;
            // This is a good example of using two cases that run the same code, as opposed to writing a whole new case
        case 'large':
        case 'x-large':
            alert('This chair is too big!');
            break;
            // A switch should always have a fallback (default)
        default:
            alert('This chair is an unknown size!');

    }
}