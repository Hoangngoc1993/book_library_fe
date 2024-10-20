import React, { createContext, useState, useContext } from 'react';

// Create context
const BookContext = createContext();

// Create provider
export const BookProvider = ({ children }) => {
    const columnName = [
        'Mã sách', 'Tên sách', 'Ngôn ngữ', 'Tác giả', 'Thể loại', 'Năm xuất bản', 'Trạng thái'
    ];

    const data = [
        {ma_sach: 100001, ten_sach: 'Lịch sử Việt Nam', ngon_ngu: 'Việt', tac_gia: 'Đoàn Lê', the_loai: 'Lịch sử', nam_xuat_ban: 2003, trang_thai: 'Có thể mượn'},
        {ma_sach: 100002, ten_sach: 'Lịch sử Việt Nam', ngon_ngu: 'Việt', tac_gia: 'Đoàn Lê', the_loai: 'Lịch sử', nam_xuat_ban: 2003, trang_thai: 'Có thể mượn'},
        {ma_sach: 100003, ten_sach: 'Lịch sử Việt Nam', ngon_ngu: 'Việt', tac_gia: 'Đoàn Lê', the_loai: 'Lịch sử', nam_xuat_ban: 2003, trang_thai: 'Có thể mượn'},
        {ma_sach: 100004, ten_sach: 'Lịch sử Việt Nam', ngon_ngu: 'Việt', tac_gia: 'Đoàn Lê', the_loai: 'Lịch sử', nam_xuat_ban: 2003, trang_thai: 'Có thể mượn'},
        {ma_sach: 100005, ten_sach: 'Truyện cổ Andersen', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},
        {ma_sach: 100006, ten_sach: 'Truyện cổ Andersen', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},
        {ma_sach: 100007, ten_sach: 'Truyện cổ Andersen', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},
        {ma_sach: 100008, ten_sach: 'Truyện cổ Andersen', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},
        {ma_sach: 100009, ten_sach: 'Truyện cổ Andersen', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},
        {ma_sach: 100010, ten_sach: 'Truyện cổ Andersen', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},
        {ma_sach: 100011, ten_sach: 'Truyện cổ Andersen', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},
        {ma_sach: 100012, ten_sach: 'Truyện cổ Andersen', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},
        {ma_sach: 100013, ten_sach: 'Truyện cổ Andersen', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},
        {ma_sach: 100014, ten_sach: 'Truyện cổ Andersen', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},
        {ma_sach: 100015, ten_sach: 'Truyện cổ Andersen', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},
        {ma_sach: 100016, ten_sach: 'Truyện cổ Andersen', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},
        {ma_sach: 100017, ten_sach: 'Truyện cổ Andersen', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},
        {ma_sach: 100018, ten_sach: 'Truyện cổ Andersen', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},
        {ma_sach: 100019, ten_sach: 'Truyện cổ Andersen', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},
        {ma_sach: 100020, ten_sach: 'Truyện cổ Glimt', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100021, ten_sach: 'Truyện cổ Glimt', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100022, ten_sach: 'Truyện cổ Glimt', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100023, ten_sach: 'Truyện cổ Glimt', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100024, ten_sach: 'Truyện cổ Glimt', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100025, ten_sach: 'Truyện cổ Glimt', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100026, ten_sach: 'Truyện cổ Glimt', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100027, ten_sach: 'Truyện cổ Glimt', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100028, ten_sach: 'Truyện cổ Glimt', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100029, ten_sach: 'Truyện cổ Glimt', ngon_ngu: 'Việt', tac_gia: 'Andersen', the_loai: 'Thiếu nhi', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100030, ten_sach: 'Không gia đình', ngon_ngu: 'Việt', tac_gia: 'Hector Malot', the_loai: 'Văn học', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100031, ten_sach: 'Không gia đình', ngon_ngu: 'Việt', tac_gia: 'Hector Malot', the_loai: 'Văn học', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100032, ten_sach: 'Không gia đình', ngon_ngu: 'Việt', tac_gia: 'Hector Malot', the_loai: 'Văn học', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100033, ten_sach: 'Không gia đình', ngon_ngu: 'Việt', tac_gia: 'Hector Malot', the_loai: 'Văn học', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100034, ten_sach: 'Không gia đình', ngon_ngu: 'Việt', tac_gia: 'Hector Malot', the_loai: 'Văn học', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100035, ten_sach: 'Ông già và biển cả', ngon_ngu: 'Việt', tac_gia: 'Ernest Hemingway', the_loai: 'Văn học', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100036, ten_sach: 'Ông già và biển cả', ngon_ngu: 'Việt', tac_gia: 'Ernest Hemingway', the_loai: 'Văn học', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100037, ten_sach: 'Ông già và biển cả', ngon_ngu: 'Việt', tac_gia: 'Ernest Hemingway', the_loai: 'Văn học', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100038, ten_sach: 'Ông già và biển cả', ngon_ngu: 'Việt', tac_gia: 'Ernest Hemingway', the_loai: 'Văn học', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100039, ten_sach: 'Ông già và biển cả', ngon_ngu: 'Việt', tac_gia: 'Ernest Hemingway', the_loai: 'Văn học', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100040, ten_sach: 'Ông già và biển cả', ngon_ngu: 'Việt', tac_gia: 'Ernest Hemingway', the_loai: 'Văn học', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100041, ten_sach: 'AQ chính truyện', ngon_ngu: 'Việt', tac_gia: 'Lỗ Tấn', the_loai: 'Văn học', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100042, ten_sach: 'AQ chính truyện', ngon_ngu: 'Việt', tac_gia: 'Lỗ Tấn', the_loai: 'Văn học', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100043, ten_sach: 'AQ chính truyện', ngon_ngu: 'Việt', tac_gia: 'Lỗ Tấn', the_loai: 'Văn học', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100044, ten_sach: 'AQ chính truyện', ngon_ngu: 'Việt', tac_gia: 'Lỗ Tấn', the_loai: 'Văn học', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 100045, ten_sach: 'AQ chính truyện', ngon_ngu: 'Việt', tac_gia: 'Lỗ Tấn', the_loai: 'Văn học', nam_xuat_ban: 2009, trang_thai: 'Có thể mượn'},        
        {ma_sach: 110001, ten_sach: 'The Son of God', ngon_ngu: 'Anh', tac_gia: 'John Mary', the_loai: 'Tôn giáo', nam_xuat_ban: 2020, trang_thai: 'Không thể mượn'},
        {ma_sach: 110002, ten_sach: 'The Son of God', ngon_ngu: 'Anh', tac_gia: 'John Mary', the_loai: 'Tôn giáo', nam_xuat_ban: 2020, trang_thai: 'Không thể mượn'},
        {ma_sach: 110003, ten_sach: 'The Son of God', ngon_ngu: 'Anh', tac_gia: 'John Mary', the_loai: 'Tôn giáo', nam_xuat_ban: 2020, trang_thai: 'Không thể mượn'},
        {ma_sach: 110004, ten_sach: 'The Son of God', ngon_ngu: 'Anh', tac_gia: 'John Mary', the_loai: 'Tôn giáo', nam_xuat_ban: 2020, trang_thai: 'Không thể mượn'},
        {ma_sach: 110005, ten_sach: 'The Son of God', ngon_ngu: 'Anh', tac_gia: 'John Mary', the_loai: 'Tôn giáo', nam_xuat_ban: 2020, trang_thai: 'Không thể mượn'},
        {ma_sach: 110006, ten_sach: 'Conscience and Truth', ngon_ngu: 'Anh', tac_gia: 'Joseph Car. Ratzinger', the_loai: 'Tôn giáo', nam_xuat_ban: 2020, trang_thai: 'Không thể mượn'},
        {ma_sach: 110007, ten_sach: 'Conscience and Truth', ngon_ngu: 'Anh', tac_gia: 'Joseph Car. Ratzinger', the_loai: 'Tôn giáo', nam_xuat_ban: 2020, trang_thai: 'Không thể mượn'},
        {ma_sach: 110008, ten_sach: 'Conscience and Truth', ngon_ngu: 'Anh', tac_gia: 'Joseph Car. Ratzinger', the_loai: 'Tôn giáo', nam_xuat_ban: 2020, trang_thai: 'Không thể mượn'},
        {ma_sach: 110009, ten_sach: 'Conscience and Truth', ngon_ngu: 'Anh', tac_gia: 'Joseph Car. Ratzinger', the_loai: 'Tôn giáo', nam_xuat_ban: 2020, trang_thai: 'Không thể mượn'},
        {ma_sach: 110010, ten_sach: 'Conscience and Truth', ngon_ngu: 'Anh', tac_gia: 'Joseph Car. Ratzinger', the_loai: 'Tôn giáo', nam_xuat_ban: 2020, trang_thai: 'Không thể mượn'},
        {ma_sach: 110011, ten_sach: 'Follow me', ngon_ngu: 'Anh', tac_gia: 'Pope John XXIII', the_loai: 'Tôn giáo', nam_xuat_ban: 2020, trang_thai: 'Không thể mượn'},
        {ma_sach: 110012, ten_sach: 'Follow me', ngon_ngu: 'Anh', tac_gia: 'Pope John XXIII', the_loai: 'Tôn giáo', nam_xuat_ban: 2020, trang_thai: 'Không thể mượn'},
        {ma_sach: 110013, ten_sach: 'Follow me', ngon_ngu: 'Anh', tac_gia: 'Pope John XXIII', the_loai: 'Tôn giáo', nam_xuat_ban: 2020, trang_thai: 'Không thể mượn'},
        {ma_sach: 110014, ten_sach: 'Follow me', ngon_ngu: 'Anh', tac_gia: 'Pope John XXIII', the_loai: 'Tôn giáo', nam_xuat_ban: 2020, trang_thai: 'Không thể mượn'},
        {ma_sach: 110015, ten_sach: 'Follow me', ngon_ngu: 'Anh', tac_gia: 'Pope John XXIII', the_loai: 'Tôn giáo', nam_xuat_ban: 2020, trang_thai: 'Không thể mượn'},
        {ma_sach: 120001, ten_sach: 'Dieu est l\'amour', ngon_ngu: 'Pháp', tac_gia: 'Jean Paul', the_loai: 'Tôn giáo', nam_xuat_ban: 2021, trang_thai: 'Không thể mượn'},
        {ma_sach: 120002, ten_sach: 'Dieu est l\'amour', ngon_ngu: 'Pháp', tac_gia: 'Jean Paul', the_loai: 'Tôn giáo', nam_xuat_ban: 2021, trang_thai: 'Không thể mượn'},
        {ma_sach: 120003, ten_sach: 'Dieu est l\'amour', ngon_ngu: 'Pháp', tac_gia: 'Jean Paul', the_loai: 'Tôn giáo', nam_xuat_ban: 2021, trang_thai: 'Không thể mượn'},
        {ma_sach: 120004, ten_sach: 'Dieu est l\'amour', ngon_ngu: 'Pháp', tac_gia: 'Jean Paul', the_loai: 'Tôn giáo', nam_xuat_ban: 2021, trang_thai: 'Không thể mượn'},
        {ma_sach: 120005, ten_sach: 'Dieu est l\'amour', ngon_ngu: 'Pháp', tac_gia: 'Jean Paul', the_loai: 'Tôn giáo', nam_xuat_ban: 2021, trang_thai: 'Không thể mượn'} 
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
    return (
        <BookContext.Provider value={{ columnName, data, listNgonNgu, listTheLoai, listTrangThai }}>
            {children}
        </BookContext.Provider>
    );
};

// Use context
export const useBookContext = () => {
    return useContext(BookContext);
};
