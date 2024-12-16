import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SuccessBox from '../../components/SuccessBox/SuccessBox';

describe('ReportBox Component', ( )=> {
    const mockOnClose = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })

    it('not render anything when isOpen is false', () => {
        render(
            <SuccessBox
                isOpen={false}
                message="Successfully"
                onClose={mockOnClose}
            />);
        expect(screen.queryByText('Successfully')).not.toBeInTheDocument();
    });

    it('render the component when isOpen is true', () => {
        render(
            <SuccessBox
                isOpen={true}
                message="Successfully"
                onClose={mockOnClose}
            />);
        expect(screen.queryByText('Successfully')).toBeInTheDocument();
        expect(screen.getByText('Thoát')).toBeInTheDocument();
    });

    it('call onConfirm when "Thoát" button is clicked', () => {
        render(
            <SuccessBox 
                isOpen={true} 
                message="Are you sure?" 
                onClose={mockOnClose}
            />);
        const confirmButton = screen.getByText('Thoát');
        fireEvent.click(confirmButton);
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
})

