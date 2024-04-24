function getResponseFromAPI() {
	return new Promise(( resolve, reject) => {
		setTimeout(() => {
		resolve({ message: "response from API"});
		}, 1000);
	})
}

export default getResponseFromAPI;
