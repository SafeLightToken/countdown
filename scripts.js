var clock;
$(document).ready(function() {
	// Grab the current date
	var currentDate = new Date();
	// Set some date in the future. In this case, it's always Jan 1
	var futureDate  = new Date(2021,03,25,00,00,00);
	// Calculate the difference in seconds between the future and current date
	var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
	// Instantiate a coutdown FlipClock
	clock = $('.dw_clock').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: true,
		showSeconds: true
	});
});
