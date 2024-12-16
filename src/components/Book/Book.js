import React, { useState, useEffect  } from "react";
import './Book.css';
import InputComponent from "../InputComponent/InputComponent";
import InputSelectComponent from "../InputSelectComponent/InputSelectComponent";
import SearchTable from "../SearchTable/SearchTable";
import ConfirmBox from "../ConfirmBox/ConfirmBox";
import ReportBox from "../ReportBox/ReportBox";
import { useBookContext } from "../../context/BookContext";
import axios from 'axios';

function Book() {
    const [bookId, setBookId] = useState(0);
    const [bookName, setBookName] = useState('');
    const [author, setAuthor] = useState('');
    const [languageId, setLanguageId] = useState(0);
    const [publicationYear, setPublicationYear] = useState(0);
    const [statusId, setStatusId] = useState(-1);
    const [categoryId, setCategoryId] = useState(0);
    const [introducion, setIntroducion] = useState('');
    const [updateTime, setUpdateTime] = useState(null);

    const [isCreateBoxOpen, setIsCreateBoxOpen] = useState(false);
    const [isUpdateBoxOpen, setIsUpdateBoxOpen] = useState(false);
    const [isDeleteBoxOpen, setIsDeleteBoxOpen] = useState(false);

    const [isCreateSuccessOpen, setIsCreateSuccessOpen] = useState(false);
    const [isUpdateSuccessOpen, setIsUpdateSuccessOpen] = useState(false);
    const [isDeleteSuccessOpen, setIsDeleteSuccessOpen] = useState(false);

    const [hasCreateError, setHasCreateError] = useState(false);
    const [hasUpdateError, setHasUpdateError] = useState(false);
    const [hasDeleteError, setHasDeleteError] = useState(false);

    const [noDataFounded, setNoDataFounded] = useState(false);
    const [messBookIdError, setMessBookIdError] = useState('');
    const [messPublicationYearError, setMessPublicationYearError] = useState('');

    const { 
        columnName, listLanguages, listCategories, listStatus, 
        listBooks, setListBooks,
        idClicked, setIdClicked
    } = useBookContext();

    const ClearBookSearchInput = () => {
        setBookId(0);
        setBookName('');
        setAuthor('');
        setLanguageId(0);
        setPublicationYear(0);
        setStatusId(-1);
        setCategoryId(0);
        setIntroducion('');
        setMessBookIdError('');
        setMessPublicationYearError('');
    }

    const fnSearchBookClick = async () => {
        try {
            if(Number.isInteger(Number(bookId)) && Number.isInteger(Number(publicationYear))){
                const response = await axios.get('http://localhost:8080/books', {
                    params: {
                        bookId: bookId,
                        bookName: bookName,
                        author: author,
                        publicationYear: publicationYear,
                        languageId: languageId,
                        categoryId: categoryId,
                        statusId: statusId
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                setListBooks(response.data);
                if(response.data.length == 0){
                    setNoDataFounded(true);
                }
            } else {
                if(!Number.isInteger(Number(bookId))){
                    setMessBookIdError('Vui lòng nhập số ở ô mã sách');
                }
                if(!Number.isInteger(Number(publicationYear))){
                    setMessPublicationYearError('Vui lòng nhập số ở ô năm xuất bản');
                }
            }
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
            setBookId(bookId);
            setBookName(response.data.book_name);
            setAuthor(response.data.author);
            setPublicationYear(response.data.publication_year);
            setLanguageId(response.data.language_id);
            setCategoryId(response.data.category_id);
            setStatusId(response.data.status_id);
            setIntroducion(response.data.introducion);
            setUpdateTime(response.data.update_time)
        } catch (error) {
            console.error("Error!", error);
        }
    };
    
    const fnCreateBookClick = async () => {
        const bookRequest = {
            book_id: bookId,
            book_name: bookName,
            author: author,
            publication_year: publicationYear,
            language_id: languageId,
            category_id: categoryId,
            status_id: statusId,
            introducion: introducion,
            update_time: null
        };

        try {
            const response = await axios.post('http://localhost:8080/book', bookRequest, {
                headers: {
                'Content-Type': 'application/json'
                }
            });
            setIsCreateSuccessOpen(true);
        } catch (error) {
            setHasCreateError(true);
        }
    };

    const fnUpdateBookClick = async () => {
        const bookRequest = {
            book_id: bookId,
            book_name: bookName,
            author: author,
            publication_year: publicationYear,
            language_id: languageId,
            category_id: categoryId,
            status_id: statusId,
            introducion: introducion,
            update_time: updateTime
        };

        try {
            const response = await axios.put('http://localhost:8080/book', bookRequest, {
                headers: {
                'Content-Type': 'application/json'
                }
            });
            if(response.data == "Updated successfully"){
                setIsUpdateSuccessOpen(true);
            } else {
                setHasUpdateError(true);
            }
        } catch (error) {
            setHasUpdateError(true);
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
                setHasDeleteError(true);
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
        setIdClicked(0);
    }

    const ReportBoxClose = () => {
        setIsCreateSuccessOpen(false);
        setIsUpdateSuccessOpen(false);
        setIsDeleteSuccessOpen(false);
        setNoDataFounded(false);
        ClearBookSearchInput();
        setHasCreateError(false);
        setHasUpdateError(false);
        setHasDeleteError(false);
        ClearBookSearchInput();
        setIdClicked(0);
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
                            <InputComponent inputValue={bookId} setInputValue={setBookId}/>
                            <div className="row message-error">{messBookIdError}</div>
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Tên sách:</div>
                        <div className='col-sm-8 col-md-8'>
                            <InputComponent inputValue={bookName} setInputValue={setBookName}/>
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Tác giả:</div>
                        <div className='col-sm-8 col-md-8'>
                            <InputComponent inputValue={author} setInputValue={setAuthor}/>
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Năm xuất bản:</div>
                        <div className='col-sm-8 col-md-8'>
                            <InputComponent inputValue={publicationYear} setInputValue={setPublicationYear}/>
                            <div className="row message-error">{messPublicationYearError}</div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-6'>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Ngôn ngữ:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputSelectComponent 
                                inputValue={languageId} 
                                setInputValue={setLanguageId}
                                listOption={listLanguages}
                            />
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Thể loại:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputSelectComponent 
                                inputValue={categoryId} 
                                setInputValue={setCategoryId}
                                listOption={listCategories}
                            />
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Trạng thái:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputSelectComponent 
                                inputValue={statusId} 
                                setInputValue={setStatusId}
                                listOption={listStatus}
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
                            <ReportBox 
                                isOpen={noDataFounded}
                                message={"Không có dữ liệu được tìm thấy!"}
                                onClose={ReportBoxClose}
                            />
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
                            <InputComponent inputValue={bookId} setInputValue={setBookId}/>
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Tên sách:</div>
                        <div className='col-sm-8 col-md-8'>
                            <InputComponent inputValue={bookName} setInputValue={setBookName}/>
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Tác giả:</div>
                        <div className='col-sm-8 col-md-8'>
                            <InputComponent inputValue={author} setInputValue={setAuthor}/>
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Năm xuất bản:</div>
                        <div className='col-sm-8 col-md-8'>
                            <InputComponent inputValue={publicationYear} setInputValue={setPublicationYear}/>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6 col-md-6'>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Ngôn ngữ:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputSelectComponent 
                                inputValue={languageId} 
                                setInputValue={setLanguageId}
                                listOption={listLanguages}
                            />
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Trạng thái:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputSelectComponent 
                                inputValue={statusId} 
                                setInputValue={setStatusId}
                                listOption={listStatus}
                            />
                        </div>
                    </div>
                    <div className='row book-search-item'>
                        <div className='col-sm-3 col-md-3 book-search-item-name'>Thể loại:</div>
                        <div className='col-sm-5 col-md-5'>
                            <InputSelectComponent 
                                inputValue={categoryId} 
                                setInputValue={setCategoryId}
                                listOption={listCategories}
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
                            <InputComponent inputValue={introducion} setInputValue={setIntroducion}/>
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
                            <ReportBox 
                                isOpen={isCreateSuccessOpen}
                                message={"Dữ liệu tạo mới thành công!"}
                                onClose={ReportBoxClose}
                            />
                            <ReportBox
                                isOpen={hasCreateError}
                                message={"Đã có lỗi xảy ra khi tạo dữ liệu!"}
                                onClose={ReportBoxClose}
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
                            <ReportBox 
                                isOpen={isUpdateSuccessOpen}
                                message={"Dữ liệu chỉnh sửa thành công!"}
                                onClose={ReportBoxClose}
                            />
                            <ReportBox
                                isOpen={hasUpdateError}
                                message={"Đã có lỗi xảy ra khi chỉnh sửa dữ liệu!"}
                                onClose={ReportBoxClose}
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
                            <ReportBox 
                                isOpen={isDeleteSuccessOpen}
                                message={"Đã xoá dữ liệu thành công!"}
                                onClose={ReportBoxClose}
                            />
                            <ReportBox
                                isOpen={hasDeleteError}
                                message={"Đã có lỗi xảy ra khi xoá dữ liệu!"}
                                onClose={ReportBoxClose}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book;