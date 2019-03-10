let pushJSON = (url, data) => {
	let request = new XMLHttpRequest();
	request.open('POST', url);
	request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
	request.send(JSON.stringify(data));
};
let fetchJSON = (thisURL) => {
	let request = new XMLHttpRequest();
	request.open('GET', thisURL, false);
	request.send(null);
	return request.responseText;
};
