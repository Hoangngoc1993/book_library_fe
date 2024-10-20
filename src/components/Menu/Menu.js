import React, { useState } from "react";
import './Menu.css';

function Menu({ select, onSelect }) {
    return(
        <div className="Menu">
            <div className="menu-name">Danh mục tìm kiếm</div>
            <ul className="menu-list">
                <li
                    className={`${select === 'books' ? 'menu-select active' : 'menu-select '}`}
                    onClick={() => onSelect('books')}
                >Danh mục sách</li>
                <li 
                    onClick={() => onSelect('users')}
                    className={`${select === 'users' ? 'menu-select active' : 'menu-select '}`}
                >Danh sách người dùng</li>
                <li 
                    onClick={() => onSelect('logtime')}
                    className={`${select === 'logtime' ? 'menu-select active' : 'menu-select '}`}
                >Lịch sử mượn/trả sách</li>
            </ul>
        </div>
    )
}

export default Menu;