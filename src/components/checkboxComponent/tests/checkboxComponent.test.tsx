import React from 'react';
import { prettyDOM, render, screen } from '@testing-library/react';
import CheckBoxComponent from '..';

describe('<CheckBoxComponent/>' , () => { 
    const mockFn = jest.fn();
    it('should render properly with default parameters' , () => {
        render(<CheckBoxComponent type="Digital" setCheckBoxState={mockFn} />);
        const checkbox = screen.getByTestId('checkbox');
        expect(checkbox).toBeInTheDocument();
        expect(screen.getByText('Digital')).toBeInTheDocument();
    });
    it('should render a checkbox with checked property true if defaultCheck prop is true', () => {
        render(<CheckBoxComponent defaultChecked type="Vinyl" setCheckBoxState={mockFn}/>);
        const checkbox = screen.getByTestId('checkbox');
        expect(checkbox).toBeChecked();
    });
    it('should render appropriate svg based on the type selected', () => {
        render(<CheckBoxComponent defaultChecked type="Vinyl" setCheckBoxState={mockFn}/>);
        expect(screen.getByTestId('vinyl-svg')).toBeInTheDocument();
    })

})