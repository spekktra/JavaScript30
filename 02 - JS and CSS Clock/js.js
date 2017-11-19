const 
	secondHand = document.querySelector('.second-hand'),
	minuteHand = document.querySelector('.min-hand'),
	hourHand = document.querySelector('.hour-hand');

// • Repeating the code every second
setInterval(() => {
	const now = new Date();

	// • Function for calculating hand's transform degrees 
	const calcDegrees = (time, max) => ((time / max) * 360) + 90; 

	// • Storing degrees value
	const 
		secondDegrees = calcDegrees(now.getSeconds(), 60),
		minuteDegrees = calcDegrees(now.getMinutes(), 60),
		hourDegrees = calcDegrees(now.getHours(), 12);

	// • Using degrees value to transform hands
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`; 

	// • Fixing the snap-back of each hand when it hits 90deg 
 let fixAnimation = (degrees, hand) => {
	if ( degrees == 90 ) {
		hand.style.transition = 'none';
	} else {
		hand.style.transition = '';
	}
 }

// • Calling the function for each of the hands respectively
fixAnimation(secondDegrees, secondHand);
fixAnimation(minuteDegrees, minuteHand);
fixAnimation(hourDegrees, hourHand);

}, 1000);