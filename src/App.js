import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    MainConts,
    BooksConts,
    QuizConts,
    BookSearchConts,
    TagConts,
    BooksResults,
    // Header,
    // LeftAside,
    // RightAside,
} from "./components/index";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainConts />}></Route>
                <Route path="/books/" element={<BooksConts />}></Route>
                <Route path="/booksearch/:searchKeyword/:answerKeyword" element={<BookSearchConts />}></Route>
                <Route path="/quiz/" element={<QuizConts />}></Route>
                <Route path="/booksearch/:searchKeyword/:answerKeyword" element={<BookSearchConts />}></Route>
                <Route path="/tag/" element={<TagConts />}></Route>
                <Route path="/booksResults/:bookId" element={<BooksResults />}></Route>
            </Routes>
            {/* 로우터 : 링크 달아주기 ->  */}
        </BrowserRouter>
    );
}

export default App;
