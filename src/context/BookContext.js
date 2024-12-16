import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Create context
const BookContext = createContext();

// Create provider
export const BookProvider = ({ children }) => {

    const [listBooks, setListBooks] = useState([]);
    const [listLanguages, setListLanguages] = useState([]);
    const [listCategories, setListCategories] = useState([]);
    const [listStatus, setListStatus] = useState([]);

    const columnName = [
        'Mã sách', 'Tên sách', 'Ngôn ngữ', 'Tác giả', 'Thể loại', 'Năm xuất bản', 'Trạng thái'
    ];

    //listLanguages is loaded
    useEffect(() => {
        axios.get('http://localhost:8080/languages')
            .then(response => {
                setListLanguages(response.data);
            })
            .catch(error => {
                console.log("Error when loading all languages");
            });
    }, []);

    //listCategories is loaded
    useEffect(() => {
        axios.get('http://localhost:8080/categories')
        .then(response => {
            setListCategories(response.data);
        })
        .catch(error => {
            console.log('Error when loading all categories!')
        })
    }, []);

    //listStatus is loaded
    useEffect(() => {
        axios.get('http://localhost:8080/status')
        .then(response => {
            setListStatus(response.data);
        })
        .catch(error => {
            console.log('Error when loading all status!')
        })
    }, []);

    const [idClicked, setIdClicked] = useState(0);

    return (
        <BookContext.Provider 
            value={{ 
                columnName, listLanguages, listCategories, listStatus, 
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
