import React from 'react';
import ReactDOM from 'react-dom';
import Issue from '../issue';

const mockProps = {
    issue: {
        title: "Test Issue"
    }
};

let elem;

beforeEach(() => {
    elem = document.createElement('div');
    ReactDOM.render(<Issue issue={mockProps.issue} />, elem);
});

it('Matches Snapshot', () => {
  expect(elem).toMatchSnapshot();
});

it('Issue Name matches up', () => {
    expect(elem.getElementsByClassName('issueCard')[0].innerHTML).toEqual('Test Issue');
});