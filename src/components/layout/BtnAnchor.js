import styles from './BtnAnchor.module.css'

import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'

export default function BtnAnchor({direction, to}){
    function handleClick(e){
        e.preventDefault()
        window.location.href = `/#${to}`
    }

    return (
        <>
            <button className={styles.btn} onClick={handleClick}>
                {direction === "down" ? (
                    <IoIosArrowDown />
                ) : (
                    <IoIosArrowUp />
                )}
            </button>
        </>
    )
}