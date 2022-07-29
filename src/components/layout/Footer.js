import styles from './Footer.module.css'
import Social from '../layout/Social'
import BtnAnchor from './BtnAnchor'

export default function Footer(){
    return (
        <footer className={styles.footer_container} id="footer">
            <div className={styles.content}>
                <div className={styles.btn_container}>
                    <BtnAnchor direction="up" to="home" />
                </div>
                <Social />
                <div className={styles.copy_right}>
                    <p><span>Gabriel Hernandes</span> &copy; Copyright 2022</p>
                </div>
            </div>
        </footer>
    )
}