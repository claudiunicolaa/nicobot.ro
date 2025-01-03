async function makeAPIRequest(endpoint, method, body) {
	const headers = {
		'Content-Type': 'application/json',
		'X-Assistant-Type': 'clinica-demo',
	};
	try {
		const options = {
			method: method,
			headers: headers,
		};

		if (body) {
			options.body = JSON.stringify(body);
		}

		const response = await fetch(baseUrl + "/" + endpoint, options);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('API request error:', error);
		throw error;
	}
}