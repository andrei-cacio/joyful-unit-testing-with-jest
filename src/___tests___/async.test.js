import asyncFn from '../async.js';

describe('asyncFn', () => {
	it('should resolve', async () => {
		await expect(asyncFn()).resolves.toEqual('ok');
	});
});
