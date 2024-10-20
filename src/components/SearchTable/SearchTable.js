import React, {useState} from 'react';
import './SearchTable.css';

const SearchTable = ({ columnName, data }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const [minNumberPage, setMinNumberPage] = useState(1);

    const numberPageInPagitation = (totalPages < 5) ? totalPages : 5;

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const currentData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div>
            <div className='row before-search-table'>
                <div className='col-sm-2 col-md-2 search-table-number-rows'>
                    Số sách tìm thấy: {data.length}
                </div>
                <div className='col-sm-7 col-md-7'></div>
                <div className='col-sm-3 col-md-3 search-table-pagination '>
                    <div>
                        <button
                            className='btn-search-table-pagination'
                            onClick={handlePrevious} disabled={currentPage === 1}>
                            {'<'}
                        </button>
                        {Array.from({ length: numberPageInPagitation }, (_, index) => (
                            <button
                                className='btn-search-table-pagination'
                                key={index}
                                onClick={() => handleClick(index + 1)}
                                disabled={currentPage === index + 1}
                            >
                            {index + 1}
                            </button>
                        ))}
                        <button 
                            className='btn-search-table-pagination'
                            onClick={handleNext} disabled={currentPage === totalPages}>
                            {'>'}
                        </button>
                    </div>
                </div>
            </div>
            <table className="search-table">
                <thead>
                    <tr>
                        {columnName.map((col, index) => (
                            <th key={index}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.ma_sach}</td>
                            <td>{row.ten_sach}</td>
                            <td>{row.ngon_ngu}</td>
                            <td>{row.tac_gia}</td>
                            <td>{row.the_loai}</td>
                            <td>{row.nam_xuat_ban}</td>
                            <td>{row.trang_thai}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SearchTable;