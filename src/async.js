export default () => 
	new Promise((resolve) => {
		setTimeout(() => {
			resolve('ok');
		}, 2000);
	});
