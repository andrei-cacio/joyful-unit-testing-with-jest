import giveMeFive from '../spying.js';

describe('randomNumberCallback', () =>  {
	it('should call the callback with proper params', () => {
		const callbackSpy = jest.fn();

		giveMeFive(callbackSpy);

		expect(callbackSpy).toHaveBeenCalledWith('5');
	});
});