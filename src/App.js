import React, { useState } from "react";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Book from './components/Book/Book';
import Menu from './components/Menu/Menu';
import { BookProvider } from './context/BookContext';

function App() {
  const [selectedOption, setSelectedOption] = useState('books');

  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <div className='row'>
        <div className='col-sm-2 col-md-2'>
           <Menu select={selectedOption} onSelect={setSelectedOption}/>
        </div>
        <div className='col-sm-10 col-md-10'>
          {
            selectedOption === 'books' ? 
            <BookProvider>
              <Book/>
            </BookProvider> 
            : null
          }
        </div>
      </div> 
      <div>
        <Footer/>
      </div> 
    </div>
  );
}

export default App;
