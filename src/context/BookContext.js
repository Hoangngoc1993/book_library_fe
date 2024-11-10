import React, { createContext, useState, useContext } from 'react';

// Create context
const BookContext = createContext();

// Create provider
export const BookProvider = ({ children }) => {

    const [listBooks, setListBooks] = useState([]);

    const columnName = [
        'Mã sách', 'Tên sách', 'Ngôn ngữ', 'Tác giả', 'Thể loại', 'Năm xuất bản', 'Trạng thái'
    ];

    const listNgonNgu  = [
        { id: 1, name: 'Việt' },
        { id: 2, name: 'Anh' },
        { id: 3, name: 'Pháp' },
        { id: 4, name: 'Đức' }
    ];

    const listTheLoai = [
        { id: 1, name: 'Sách giáo khoa' },
        { id: 2, name: 'Thiếu nhi' },
        { id: 3, name: 'Văn học' },
        { id: 4, name: 'Lịch sử' },
        { id: 5, name: 'Khoa học' },
        { id: 6, name: 'Tôn giáo' },
        { id: 7, name: 'Nghệ thuật' },
        { id: 8, name: 'Sách tham khảo' }
    ]

    const listTrangThai = [
        { id: 0, name: 'Không thể mượn' },
        { id: 1, name: 'Có thể mượn' }
    ]

    const [idClicked, setIdClicked] = useState(0);

    return (
        <BookContext.Provider 
            value={{ 
                columnName, listNgonNgu, listTheLoai, listTrangThai, 
                listBooks, setListBooks,
                idClicked, setIdClicked
            }}
        >
            {children}
        </BookContext.Provider>
    );
};

// Use context
export const useBookContext = () => {
    return useContext(BookContext);
};
