import React, { useState, useEffect  } from "react";
import './Book.css';
import InputComponent from "../InputComponent/InputComponent";
import InputSelectComponent from "../InputSelectComponent/InputSelectComponent";
import SearchTable from "../SearchTable/SearchTable";
import ConfirmBox from "../ConfirmBox/ConfirmBox";
import SuccessBox from "../SuccessBox/SuccessBox";
import { useBookContext } from "../../context/BookContext";
import axios from 'axios';

function Book() {
    const [ma_sach, setMaSach] = useState(0);
    const [ten_sach, setTenSach] = useState('');
    const [tac_gia, setTacGia] = useState('');
    const [ma_ngon_ngu, setMaNgonNgu] = useState(0);
    const [nam_xuat_ban, setNamXuatBan] = useState(0);
    const [ma_trang_thai, setMaTrangThai] = useState(-1);
    const [ma_the_loai, setMaTheLoai] = useState(0);
    const [gioi_thieu, setGioiThieu] = useState('');

    const [isCreateBoxOpen, setIsCreateBoxOpen] = useState(false);
    const [isUpdateBoxOpen, setIsUpdateBoxOpen] = useState(false);
    const [isDeleteBoxOpen, setIsDeleteBoxOpen] = useState(false);

    const [isCreateSuccessOpen, setIsCreateSuccessOpen] = useState(false);
    const [isUpdateSuccessOpen, setIsUpdateSuccessOpen] = useState(false);
    const [isDeleteSuccessOpen, setIsDeleteSuccessOpen] = useState(false);

    const { 
        columnName, listNgonNgu, listTheLoai, listTrangThai, 
        listBooks, setListBooks,
        idClicked
    } = useBookContext();

    const ClearBookSearchInput = () => {
        setMaSach(0);
        setTenSach('');
        setTacGia('');
        setMaNgonNgu(0);
        setNamXuatBan(0);
        setMaTrangThai(-1);
        setMaTheLoai(0);
        setGioiThieu('');
    }

    const fnSearchBookClick = async () => {
        try {
            const response = await axios.get('http://localhost:8080/books', {
                params: {
                    maSach: ma_sach,
                    tenSach: ten_sach,
                    tacGia: tac_gia,
                    namXuatBan: nam_xuat_ban,
                    maNgonNgu: ma_ngon_ngu,
                    maTheLoai: ma_the_loai,
                    maTrangThai: ma_trang_thai
                },
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            setListBooks(response.data);
        } catch (error) {
            console.error("Error!", error);
        }
    };

    const fnSearchBookById = async (bookId) => {
        try {
            const response = await axios.get(`http://localhost:8080/book/${bookId}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            setMaSach(bookId);
            setTenSach(response.data.tenSach);
            setTacGia(response.data.tacGia);
            setNamXuatBan(response.data.namXuatBan);
            setMaNgonNgu(response.data.maNgonNgu);
            setMaTheLoai(response.data.maTheLoai);
            setMaTrangThai(response.data.maTrangThai);
            setGioiThieu(response.data.gioiThieu);
        } catch (error) {
            console.error("Error!", error);
        }
    };
    
    const fnCreateBookClick = async () => {
        const bookRequest = {
            maSach: ma_sach,
            tenSach: ten_sach,
            tacGia: tac_gia,
            namXuatBan: nam_xuat_ban,
            maNgonNgu: ma_ngon_ngu,
            maTheLoai: ma_the_loai,
            maTrangThai: ma_trang_thai,
            gioiThieu: gioi_thieu
        };

        try {
            const response = await axios.post('http://localhost:8080/book', bookRequest, {
                headers: {
                'Content-Type': 'application/json'
                }
            });
            setIsCreateSuccessOpen(true);
        } catch (error) {
            console.log('Creating was failed!');
            throw error;
        }
    };

    const fnUpdateBookClick = async () => {
        const bookRequest = {
            maSach: ma_sach,
            tenSach: ten_sach,
            tacGia: tac_gia,
            namXuatBan: nam_xuat_ban,
            maNgonNgu: ma_ngon_ngu,
            maTheLoai: ma_the_loai,
            maTrangThai: ma_trang_thai,
            gioiThieu: gioi_thieu
        };

        try {
            const response = await axios.put('http://localhost:8080/book', bookRequest, {
                headers: {
                'Content-Type': 'application/json'
                }
            });
            setIsUpdateSuccessOpen(true);
        } catch (error) {
            console.log('Updating was failed!');
            throw error;
        }
    };

    const fnDeleteBookById = async () => {
        if(idClicked > 0) {
            try {
                const response = await axios.put(`http://localhost:8080/deletebook/${idClicked}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                setIsDeleteSuccessOpen(true);
            } catch (error) {
                console.log('Deleting was failed!');
            }
        }
    };

    const CreateBoxOpen = () => {
        setIsCreateBoxOpen(true);
    }

    const UpdateBoxOpen = () => {
        setIsUpdateBoxOpen(true);
    }

    const DeleteBoxOpen = () => {
        setIsDeleteBoxOpen(true);
    }

    const ConfirmBoxClose = () => {
        setIsCreateBoxOpen(false);
        setIsDeleteBoxOpen(false);
        setIsUpdateBoxOpen(false);
    }

    const SuccessBoxClose = () => {
        setIsCreateSuccessOpen(false);
        setIsUpdateSuccessOpen(false);
        setIsDeleteSuccessOpen(false);
        ClearBookSearchInput();
    }

    const CreateSuccess = () => {
        ConfirmBoxClose();
        fnCreateBookClick();
    }

    const UpdateSuccess = () => {
        ConfirmBoxClose();
        fnUpdateBookClick();
    }

    const DeleteSuccess = () => {
        ConfirmBoxClose();
        fnDeleteBookById();
    }

    useEffect(() => {
        fnSearchBookById(idClicked);
      }, [idClicked]);

    return(
        <div className="book">
            <div className="book-item">
                ĐIỀU KIỆN TÌM KIẾM
            </div>
            <div className='row'>
                <div className='col-sm-6 col-md-6'>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Mã sách:</div>
                        <div className='col-sm-8 col-md-8'>
                            <InputComponent inputValue={ma_sach} setInputValue={setMaSach}/>
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Tên sách:</div>
                        <div className='col-sm-8 col-md-8'>
                            <InputComponent inputValue={ten_sach} setInputValue={setTenSach}/>
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Tác giả:</div>
                        <div className='col-sm-8 col-md-8'>
                            <InputComponent inputValue={tac_gia} setInputValue={setTacGia}/>
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Năm xuất bản:</div>
                        <div className='col-sm-8 col-md-8'>
                            <InputComponent inputValue={nam_xuat_ban} setInputValue={setNamXuatBan}/>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-6'>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Ngôn ngữ:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputSelectComponent 
                                inputValue={ma_ngon_ngu} 
                                setInputValue={setMaNgonNgu}
                                listOption={listNgonNgu}
                            />
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Thể loại:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputSelectComponent 
                                inputValue={ma_the_loai} 
                                setInputValue={setMaTheLoai}
                                listOption={listTheLoai}
                            />
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Trạng thái:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputSelectComponent 
                                inputValue={ma_trang_thai} 
                                setInputValue={setMaTrangThai}
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
                            <button className="book-btn" onClick={fnSearchBookClick}>Tìm kiếm</button>
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
                <SearchTable columnName={columnName} data={listBooks}/>
            </div>
            <div className="book-item">
                CHI TIẾT TÌM KIẾM
            </div>
            <div className='row'>
                <div className='col-sm-6 col-md-6'>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Mã sách:</div>
                        <div className='col-sm-8 col-md-8'>
                            <InputComponent inputValue={ma_sach} setInputValue={setMaSach}/>
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Tên sách:</div>
                        <div className='col-sm-8 col-md-8'>
                            <InputComponent inputValue={ten_sach} setInputValue={setTenSach}/>
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Tác giả:</div>
                        <div className='col-sm-8 col-md-8'>
                            <InputComponent inputValue={tac_gia} setInputValue={setTacGia}/>
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Năm xuất bản:</div>
                        <div className='col-sm-8 col-md-8'>
                            <InputComponent inputValue={nam_xuat_ban} setInputValue={setNamXuatBan}/>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-6'>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Ngôn ngữ:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputSelectComponent 
                                inputValue={ma_ngon_ngu} 
                                setInputValue={setMaNgonNgu}
                                listOption={listNgonNgu}
                            />
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Trạng thái:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputSelectComponent 
                                inputValue={ma_trang_thai} 
                                setInputValue={setMaTrangThai}
                                listOption={listTrangThai}
                            />
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Thể loại:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputSelectComponent 
                                inputValue={ma_the_loai} 
                                setInputValue={setMaTheLoai}
                                listOption={listTheLoai}
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
                            <button className="book-btn" onClick={CreateBoxOpen}>Tạo mới</button>
                            <ConfirmBox 
                                isOpen={isCreateBoxOpen}
                                message={"Bạn có muốn tạo mới dữ liệu này không?"}
                                onClose={ConfirmBoxClose}
                                onConfirm={CreateSuccess}
                            />
                            <SuccessBox 
                                isOpen={isCreateSuccessOpen}
                                message={"Dữ liệu tạo mới thành công!"}
                                onClose={SuccessBoxClose}
                            />
                        </div>
                        <div className='col-sm-4 col-md-4  book-search-item'>
                            <button className="book-btn" onClick={UpdateBoxOpen}>Chỉnh sửa</button>
                            <ConfirmBox 
                                isOpen={isUpdateBoxOpen}
                                message={"Bạn có muốn chỉnh sửa dữ liệu này không?"}
                                onClose={ConfirmBoxClose}
                                onConfirm={UpdateSuccess}
                            />
                            <SuccessBox 
                                isOpen={isUpdateSuccessOpen}
                                message={"Dữ liệu chỉnh sửa thành công!"}
                                onClose={SuccessBoxClose}
                            />
                        </div>
                        <div className='col-sm-4 col-md-4  book-search-item'>
                            <button className="book-btn" onClick={DeleteBoxOpen}>Xoá</button>
                            <ConfirmBox 
                                isOpen={isDeleteBoxOpen}
                                message={"Bạn có muốn xoá dữ liệu này không?"}
                                onClose={ConfirmBoxClose}
                                onConfirm={DeleteSuccess}
                            />
                            <SuccessBox 
                                isOpen={isDeleteSuccessOpen}
                                message={"Đã xoá dữ liệu thành công!"}
                                onClose={SuccessBoxClose}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book;