import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
} from 'react-router-dom';
import HomePage from './page/Home/HomePage';
import NotFound from './page/NotFound/NotFound';
import BookingPage from './page/BookingPage/BookingPage';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </>
    );
}

export default App;
