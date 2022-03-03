import React from 'react';
import { prettyDOM, render, screen } from '@testing-library/react';
import userEvent  from '@testing-library/user-event';
import Formats from '..';

describe('<Formats/>', () => {
    it('should render correctly', () => {
        render(<Formats/>);
        expect(screen.getByText('Formats')).toBeInTheDocument();
        expect(screen.getByText('Digital')).toBeInTheDocument();
        expect(screen.getByText('Vinyl')).toBeInTheDocument();
        expect(screen.getByText('CD')).toBeInTheDocument();
        expect(screen.getAllByTestId('checkbox')).toHaveLength(3);
    });
    it('should display error message if 0 formats are selected', () => {
        // By default Digital format is selected so we will uncheck it and observe error message
        render(<Formats/>);
        const checkbox = screen.getAllByTestId('checkbox')[0];
        userEvent.click(checkbox);
        expect(screen.getByTestId('error-message')).toBeInTheDocument();
    })

});