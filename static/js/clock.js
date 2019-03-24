const secondsHand = document.querySelector('.seconds-hand');
const minutesHand = document.querySelector('.minutes-hand');
const hoursHand = document.querySelector('.hour-hand');
const hands = document.querySelectorAll('.clock__hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg`;
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg`;

    if (secondsDegrees === 90) {
        hands.forEach(hand => hand.style.transition = 'none'); // removes the transition
    }
    else {
        hands.forEach(hand => hand.style.transition = 'all 0.5s'); // adds back the transition
    }
}




setInterval(setDate, 1000);
