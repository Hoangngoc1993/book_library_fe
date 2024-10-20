import React, { useState } from "react";
import './Book.css';
import InputComponent from "../InputComponent/InputComponent";
import InputSelectComponent from "../InputSelectComponent/InputSelectComponent";
import SearchTable from "../SearchTable/SearchTable";
import { useBookContext } from "../../context/BookContext";

function Book() {
    const [ma_sach, setMaSach] = useState(0);
    const [ten_sach, setTenSach] = useState('');
    const [tac_gia, setTacGia] = useState('');
    const [ngon_ngu, setNgonNgu] = useState('');
    const [nam_xuat_ban, setNamXuatBan] = useState(0);
    const [trang_thai, setTrangThai] = useState('');
    const [the_loai, setTheLoai] = useState('');
    const [gioi_thieu, setGioiThieu] = useState('')

    const { columnName, data, listNgonNgu, listTheLoai, listTrangThai } = useBookContext();

    const ShowSearchAPI = () => {
        console.log('Ma sach: ' + ma_sach);
        console.log('Ten sach: ' + ten_sach);
        console.log('Tac gia: ' + tac_gia);
        console.log('Nam xuat ban: ' + nam_xuat_ban);
        console.log('Ngon ngu: ' + ngon_ngu);
        console.log('Trang thai: ' + trang_thai);
    }

    const ClearBookSearchInput = () => {
        setMaSach(0);
        setTenSach('');
        setTacGia('');
        setNgonNgu('');
        setNamXuatBan(0);
        setTrangThai('');
    }

    return(
        <div className="book">
            <div className="book-item">
                ĐIỀU KIỆN TÌM KIẾM
            </div>
            <div className='row'>
                <div className='col-sm-6 col-md-6'>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Mã sách:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputComponent inputValue={ma_sach} setInputValue={setMaSach}/>
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Tên sách:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputComponent inputValue={ten_sach} setInputValue={setTenSach}/>
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Tác giả:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputComponent inputValue={tac_gia} setInputValue={setTacGia}/>
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Thể loại:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputSelectComponent 
                                inputValue={the_loai} 
                                setInputValue={setTheLoai}
                                listOption={listTheLoai}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-6'>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Ngôn ngữ:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputSelectComponent 
                                inputValue={ngon_ngu} 
                                setInputValue={setNgonNgu}
                                listOption={listNgonNgu}
                            />
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Năm xuất bản:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputComponent inputValue={nam_xuat_ban} setInputValue={setNamXuatBan}/>
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Trạng thái:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputSelectComponent 
                                inputValue={trang_thai} 
                                setInputValue={setTrangThai}
                                listOption={listTrangThai}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-8 col-md-8'></div>
                <div className='col-sm-4 col-md-4'>
                    <div className='row'>
                        <div className='col-sm-4 col-md-4 book-search-item'></div>
                        <div className='col-sm-4 col-md-4 book-search-item'>
                            <button className="book-btn" onClick={ShowSearchAPI}>Tìm kiếm</button>
                        </div>
                        <div className='col-sm-4 col-md-4 book-search-item'>
                            <button className="book-btn" onClick={ClearBookSearchInput}>Clear</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="book-item">
                KẾT QUẢ TÌM KIẾM
            </div>
            <div>
                <SearchTable columnName={columnName} data={data}/>
            </div>
            <div className="book-item">
                CHI TIẾT TÌM KIẾM
            </div>
            <div className='row'>
                <div className='col-sm-6 col-md-6'>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Mã sách:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputComponent inputValue={ma_sach} setInputValue={setMaSach}/>
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Tên sách:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputComponent inputValue={ten_sach} setInputValue={setTenSach}/>
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Tác giả:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputComponent inputValue={tac_gia} setInputValue={setTacGia}/>
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Thể loại:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputSelectComponent 
                                inputValue={the_loai} 
                                setInputValue={setTheLoai}
                                listOption={listTheLoai}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-6'>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Ngôn ngữ:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputSelectComponent 
                                inputValue={ngon_ngu} 
                                setInputValue={setNgonNgu}
                                listOption={listNgonNgu}
                            />
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Năm xuất bản:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputComponent inputValue={nam_xuat_ban} setInputValue={setNamXuatBan}/>
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Trạng thái:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputSelectComponent 
                                inputValue={trang_thai} 
                                setInputValue={setTrangThai}
                                listOption={listTrangThai}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-9 col-md-9'>
                    <div className='row book-search-item'>
                        <div className='col-sm-2 col-md-2 book-search-item-name'>Giới thiệu sách:</div>
                        <div className='col-sm-10 col-md-10'>
                            <InputComponent inputValue={gioi_thieu} setInputValue={setGioiThieu}/>
                        </div>
                    </div>
                </div>
                <div className='col-sm-3 col-md-3'></div>
            </div>
            <div className='row'>
                <div className='col-sm-8 col-md-8'></div>
                <div className='col-sm-4 col-md-4'>
                    <div className='row'>
                        <div className='col-sm-4 col-md-4  book-search-item'>
                            <button className="book-btn">Tạo mới</button>
                        </div>
                        <div className='col-sm-4 col-md-4  book-search-item'>
                            <button className="book-btn">Chỉnh sửa</button>
                        </div>
                        <div className='col-sm-4 col-md-4  book-search-item'>
                            <button className="book-btn">Xoá</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book;