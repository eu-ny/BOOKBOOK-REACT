import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const BookSearch = ({ setPage, setStartIndex }) => {
    const inputRef = useRef()
    const navigate = useNavigate()

    const handleSearch = () => {
        const value = inputRef.current.value
        if (value) {
            setPage(1)
            setStartIndex(0)
            navigate(`/booksearch/intitle:${value}/${value}`)
            inputRef.current.value = ''
        } else {
            alert('공백은 안됩니다.')
        }
    }

    const onKeyPress = (e) => {
        if (e.charCode === 13) {
            handleSearch()
        }
    }

    const onClick = () => {
        handleSearch()
    }
    return (
        <div className="smallSearch__wrap">
            <input ref={inputRef} type="text" placeholder="원하는 책을 검색해보세요!" onKeyPress={onKeyPress} className="smallSearchBar" />
            <button type="submit" className="smallSearchBtn ir" onClick={onClick}>
                버튼
            </button>
        </div>
    )
}

export default BookSearch
