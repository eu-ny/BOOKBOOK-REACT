import React from 'react'
import { Link } from 'react-router-dom'
import { bgadd } from '../../utils/loadBody'
import LeftAside from '../include/LeftAside'
import RightAside from '../include/RightAside'

const TagConts = () => {
    return (
        <>
            <LeftAside />
            <section id="tagCont" className="container" onLoad={bgadd}>
                <div className="tagWrap">
                    <div className="taginner">
                        <Link to="/booksearch/love+소설/로맨스에 빠진 사랑" className="tag__first">
                            <img src={process.env.PUBLIC_URL + "/img/genre03.png"} alt="hearticon" />
                            <p>로맨스에 빠진 사랑</p>
                        </Link>
                        <div className="tag__center">
                            <Link to="/booksearch/추리+스릴러/추리 !@@! 스릴러" className="tag__second">
                                <p>공포 감성 가득</p>
                                <p>추리 / 스릴러</p>
                            </Link>
                            <Link to="/booksearch/유아+어린이+동화/유아 !@@! 어린이" className="tag__third">
                                <p>유아 / 어린이</p>
                                <img src={process.env.PUBLIC_URL + "/img/genre02.png"} alt="" />
                            </Link>
                        </div>
                        <Link to="/booksearch/SF+판타지/SF !@@! 판타지" className="tag__fourth">
                            <p>신비한 모험의 세계로</p>
                            <p>SF / 판타지</p>
                        </Link>
                    </div>
                    <Link to="/booksearch/사랑+소설/로맨스에 빠진 사랑" className="tag__right">
                        <span className="tag__title">이런 건 어떠신가요?</span>
                        <p>로맨스에 빠진 사랑</p>
                        <img src="/assets/img/genre03.png" alt="hearticon" />
                    </Link>
                </div>
            </section>
            <RightAside />
        </>
    )
}

export default TagConts
