(function (){





var styleContent = '',
    timeTypes = ['Second', 'Minute', 'Hour'],
	startAngle,
	time,
	lastTime = 0,
	date = new Date();
for (var i = 0, timeType; timeType = timeTypes[i]; i++) {
	time = date['get' + timeType + 's']();
	if (timeType === 'Hour' && time > 12) {
		time -= 12;
	}
	time += lastTime / 60;
	lastTime = time;
	startAngle = time / (timeType === 'Hour' ? 12 : 60) * 360;
	styleContent += '\
		@keyframes ' + timeType.toLowerCase() + 'Hand {\
			from {\
				transform:rotate(' + startAngle + 'deg);\
			}\
			to {\
				transform:rotate(' + (startAngle + 360) + 'deg);\
			}\
		}\
	';
}
var style = document.createElement('style');
style.textContent = styleContent;
document.head.appendChild(style);





})();