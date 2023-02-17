onmessage = function(event) {
	console.log('worker:', event.data);
	var count = 0;
	var timeBar = setInterval(() => {
		if(count >= 10) {
			console.log('worker: end')
			clearInterval(timeBar);
			close();
		}
		count++;
		self.postMessage(count)
	},1000)
}