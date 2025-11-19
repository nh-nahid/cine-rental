import React, { useContext } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MovieList from './cine/MovieList';
import Footer from './Footer';
import { ThemeContext } from './contexts';

const Pages = () => {
    const {darkMode} = useContext(ThemeContext)
    return (
        <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
            <Header className="flex justify-center" />
            <main className='flex justify-center'>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sidebar />
                    <MovieList />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Pages;