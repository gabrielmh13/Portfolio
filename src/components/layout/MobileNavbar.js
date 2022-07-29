import styles from './MobileNavbar.module.css'

import ItemNavbar from './ItemNavbar'

import { GiHamburgerMenu  } from 'react-icons/gi'
import { useState } from 'react'


export default function MobileNavbar({bgNavbar}){

    const [showItemsMenu, setShowItemsMenu] = useState(false)

    function handleClick(e){
        e.preventDefault()
        setShowItemsMenu(!showItemsMenu)
    }

    return (
        <>
            <div className={
                `${styles.mobile_nav_container} ${bgNavbar === true || showItemsMenu === true ? 
                    (styles['mobile_nav_container_scroll']) : ('')}`
                }
            >
                <button className={styles.btn} onClick={handleClick}>
                    <GiHamburgerMenu />
                </button>
            </div>
            {showItemsMenu === true ? (
                <div className={styles.items_container}>
                        <ul>
                            <ItemNavbar to="#home" name="Home" />
                            <ItemNavbar to="#about" name="About" />
                            <ItemNavbar to="#resume" name="Resume" />
                            <ItemNavbar to="#works" name="Works" />
                            <ItemNavbar to="#testimonials" name="Testimonials" />
                            <ItemNavbar to="#contact" name="Contact" />
                        </ul>
                </div>
            ) : (
               <div></div>
            ) }
        </>
    )
}