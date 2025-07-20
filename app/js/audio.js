const pen = new Audio('app/audio/mixkit-short-pencil-writing-2376.wav');
function postcard() {
    
    pen.play().catch(e => console.log('Audio play failed'));
    // Play sound on typing
    console.log("work");
}
