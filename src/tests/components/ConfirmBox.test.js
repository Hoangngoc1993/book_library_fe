import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ConfirmBox from '../../components/ConfirmBox/ConfirmBox';

describe('ConfirmBox Component', () => {
    const mockOnClose = jest.fn();
    const mockOnConfirm = jest.fn();
  
    beforeEach(() => {
      jest.clearAllMocks(); // all mock functions are reseted before test
    });
  
    it('not render anything when isOpen is false', () => {
      render(
        <ConfirmBox 
            isOpen={false} 
            message="Are you sure?" 
            onClose={mockOnClose} 
            onConfirm={mockOnConfirm}
        />);
      expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
    });
  
    it('render the component when isOpen is true', () => {
      render(
        <ConfirmBox 
            isOpen={true} 
            message="Are you sure?" 
            onClose={mockOnClose} 
            onConfirm={mockOnConfirm} 
        />);
      expect(screen.getByText('Are you sure?')).toBeInTheDocument();
      expect(screen.getByText('Có')).toBeInTheDocument();
      expect(screen.getByText('Không')).toBeInTheDocument();
    });
  
    it('call onConfirm when "Có" button is clicked', () => {
      render(
        <ConfirmBox 
            isOpen={true} 
            message="Are you sure?" 
            onClose={mockOnClose} 
            onConfirm={mockOnConfirm} 
        />);
      const confirmButton = screen.getByText('Có');
      fireEvent.click(confirmButton);
      expect(mockOnConfirm).toHaveBeenCalledTimes(1);
    });
  
    it('call onClose when "Không" button is clicked', () => {
      render(
        <ConfirmBox 
            isOpen={true} 
            message="Are you sure?" 
            onClose={mockOnClose} 
            onConfirm={mockOnConfirm} 
        />);
      const closeButton = screen.getByText('Không');
      fireEvent.click(closeButton);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
  });