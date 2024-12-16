import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputSelectComponent from '../../components/InputSelectComponent/InputSelectComponent';

describe('InputSelectComponent', () => {
  const mockSetInputValue = jest.fn();
  const mockListOption = [
    { id: '1', name: 'Option 1' },
    { id: '2', name: 'Option 2' },
    { id: '3', name: 'Option 3' },
  ];

  test('renders select with options', () => {
    render(
      <InputSelectComponent 
        inputValue="" 
        setInputValue={mockSetInputValue} 
        listOption={mockListOption} 
      />
    );

    // Check if the select element is rendered
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    // Check if the default empty option is present
    expect(selectElement).toHaveValue('');

    // Check if options are rendered correctly
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(mockListOption.length + 1); // +1 for the empty option
    expect(options[1]).toHaveTextContent('Option 1');
    expect(options[2]).toHaveTextContent('Option 2');
    expect(options[3]).toHaveTextContent('Option 3');
  });

  test('calls setInputValue when an option is selected', () => {
    render(
      <InputSelectComponent 
        inputValue="" 
        setInputValue={mockSetInputValue} 
        listOption={mockListOption} 
      />
    );

    const selectElement = screen.getByRole('combobox');

    // Simulate selecting an option
    fireEvent.change(selectElement, { target: { value: '2' } });

    // Check if setInputValue is called with the correct value
    expect(mockSetInputValue).toHaveBeenCalledWith('2');
  });

  test('displays the correct value based on inputValue prop', () => {
    render(
      <InputSelectComponent 
        inputValue="2" 
        setInputValue={mockSetInputValue} 
        listOption={mockListOption} 
      />
    );

    const selectElement = screen.getByRole('combobox');

    // Check if the value is set correctly
    expect(selectElement).toHaveValue('2');
  });
});
