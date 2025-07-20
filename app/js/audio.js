const faq = document.querySelectorAll("#faq_files")
const soundFile = new Audio('app/audio/mixkit-paper-slide-1530.wav');
// const clickClose = new Audio('app/audio/click_close.mp3');
// const clickOpen = new Audio('app/audio/click_general.mp3');
// faq.forEach(q,()=> {
    //     q.addEventListener('click', () => {
        //       soundFile.play();
        //     });
        // })
        
        
const pen = new Audio('app/audio/mixkit-short-pencil-writing-2376.wav');
// Play sound on typing

document.querySelectorAll('input[type="text"], .message-lines').forEach(input => {
    input.addEventListener('keydown', () => {
        pen.currentTime = 0; // Reset to start
        pen.play().catch(e => console.log('Audio play failed'));
    });
});

// Play sound on checkbox clicks
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', () => {
        pen.play().catch(e => console.log('Audio play failed'));
    });
});