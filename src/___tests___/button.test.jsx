import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import renderer from 'react-test-renderer';

import Button from '../Button';

describe('<Button />', () => {
	it('should render the given label', () => {
		const tree = renderer.create(<Button label='click me' />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});