import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { bgadd, bgRemove } from "../../utils/loadBody";

const LeftAside = () => {

    const navigate = useNavigate();
    const navigateClick = () => {
        navigate(-1);
      };
      
    return (
        <header id="header">
            <nav className="booksMenu__list">
                <h2>
                    <Link to="/" onClick={bgRemove}>
                        BOOK! BOOK!
                    </Link>
                </h2>

                <figure className="booksIcon">
                    <img src={process.env.PUBLIC_URL + '/img/booksIcon01.svg'} alt="아이콘1" />
                </figure>

                <Link to="/books" className="link" onClick={bgadd}>
                    BOOKS
                </Link>
                <Link to="/quiz" className="link" onClick={bgadd}>
                    QUIZ
                </Link>
                <Link to="/tag/" className="link" onClick={bgadd}>
                    GENRE
                </Link>

                <button type="button" onClick={navigateClick}>
                    <span className="ir">왼쪽 화살표</span>
                    <em>BACK</em>
                </button>
            </nav>
        </header>
    );
};

export default LeftAside;
