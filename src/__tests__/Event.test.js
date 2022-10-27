import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
    let event, EventWrapper;
    beforeAll(() => {
        event = mockData[0];
        EventWrapper = shallow(<Event event={mockData[0]} />);
    });

    test('renders the component', () => {
        expect(EventWrapper).toBeDefined();
    });

    test('render summary of event', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });

    test('render summary of mock event correctly', () => {
        expect(EventWrapper.find('.summary').text()).toBe(event.summary);
    });

    test('render event info', () => {
        expect(EventWrapper.find('.info')).toHaveLength(1);
    });

    test('render mock event info correctly', () => {
        expect(EventWrapper.find('.info').text()).toBe(
            `${event.start.dateTime} ${event.start.timeZone} ${event.location}`
        );
    });

    test('render button for showing details', () => {
        expect(EventWrapper.find('.showDetails')).toHaveLength(1);
    });

    test('hide details by default', () => {
        expect(EventWrapper.find('.details')).toHaveLength(0);
    });

    test('render details after show button is clicked', () => {
        EventWrapper.find('.showDetails').at(0).simulate('click');
        expect(EventWrapper.find('.details')).toHaveLength(1);
    });

    test('render event title, link, and description when details are visible', () => {
        EventWrapper.setState({ detailsVisible: true });
        expect(EventWrapper.find('.detailsTitle')).toHaveLength(1);
        expect(EventWrapper.find('.detailsLink')).toHaveLength(1);
        expect(EventWrapper.find('.detailsDescription')).toHaveLength(1);
    });

    test('render button to hide details when they are visible', () => {
        EventWrapper.setState({ detailsVisible: true });
        expect(EventWrapper.find('.hideDetails')).toHaveLength(1);
    });

    test('do not render details when hide button is clicked', () => {
        EventWrapper.setState({ detailsVisible: true });
        EventWrapper.find('.hideDetails').at(0).simulate('click');
        expect(EventWrapper.find('.details')).toHaveLength(0);
    });

});