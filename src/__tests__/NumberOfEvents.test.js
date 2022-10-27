import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('render component', () => {
        expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
    });

    test('render input for number of events', () => {
        expect(NumberOfEventsWrapper.find('.numberOfEventsInput')).toHaveLength(1);
    });

    test('default list of 32 events', () => {
        expect(NumberOfEventsWrapper.find('.numberOfEventsInput').prop('value')).toBe('32');
    });

    test('event number changes on user input (21)', () => {
        const eventObject = { target: { value: '21' } };
        NumberOfEventsWrapper.find('.numberOfEventsInput').simulate(
            'change', eventObject
        );
        expect(NumberOfEventsWrapper.state('eventsNumber')).toBe('21');
    });

})