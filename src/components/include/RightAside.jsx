import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import { fetchAPI } from '../../utils/fetchAPI'

const RightAside = () => {

    const { bookId } = useParams()
    const [book, setBook] = useState('')

    useEffect(() => {
        fetchAPI(`printType=books&langRestrict=ko&q=${bookId}`).then((data) => setBook(data.items[0]))
        // [bookId] -> fetchAPI에 사용할 값 가져오기.
    }, [bookId]);

    const rightAction = () => {
        // document.body.style.minHeight = document.querySelector('.container').offsetHeight + 'px'
        document.querySelectorAll('.container').forEach((el) => {
            el.classList.add('active')
        })
        document.querySelector('#aside').classList.add('hide')
    }
    const leftAction = () => {
        document.querySelectorAll('.container').forEach((el) => {
            el.classList.remove('active')
        })
        document.querySelector('#aside').classList.remove('hide')
    }

    return (
        <>
            <aside id="aside" className="">
                <span className="rightAllow ir" onClick={rightAction}>
                    오른쪽화살표
                </span>
                <div className="preview__book">
                    <h2 className="preview__title">PREVIEW</h2>
                    <a className="preview__img" href="/">
                        <img src={process.env.PUBLIC_URL + "/img/noBookImg.png"} alt="없는이미지" />
                    </a>
                    <p className="preview__bookTitle">
                    { book?.volumeInfo?.title === undefined ? "오늘의 책은?!" : (book?.volumeInfo?.title) }
                    </p>
                    <p className="preview__bookDesc">북북에서 책의 내용을 미리 확인해보세요! 이 곳에 줄거리가 나타납니다.</p>
                </div>
            </aside>
            <div className="leftAllow" onClick={leftAction}>
                <span className="lf ir">왼쪽화살표</span>
                <span className="prev">PREVIEW</span>
            </div>
        </>
    )
}

export default RightAside
