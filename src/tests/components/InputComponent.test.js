import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Thêm các matcher như `toBeInTheDocument`
import InputComponent from '../../components/InputComponent/InputComponent';

describe('InputComponent', () => {
    it('renders correctly with initial value', () => {
        const mockSetInputValue = jest.fn();
        render(<InputComponent inputValue="test" setInputValue={mockSetInputValue} />);

        // Kiểm tra input được render với giá trị ban đầu
        const inputElement = screen.getByRole('textbox'); // Tìm input bằng role
        expect(inputElement).toBeInTheDocument();
        expect(inputElement.value).toBe('test');
    });

    it('calls setInputValue on input change', () => {
        const mockSetInputValue = jest.fn();
        render(<InputComponent inputValue="" setInputValue={mockSetInputValue} />);

        const inputElement = screen.getByRole('textbox');
        // Giả lập hành động nhập liệu
        fireEvent.change(inputElement, { target: { value: 'new value' } });

        // Kiểm tra xem hàm setInputValue đã được gọi với giá trị mới
        expect(mockSetInputValue).toHaveBeenCalledTimes(1);
        expect(mockSetInputValue).toHaveBeenCalledWith('new value');
    });
});