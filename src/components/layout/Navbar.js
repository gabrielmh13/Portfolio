import styles from './Navbar.module.css'
import ItemNavbar from './ItemNavbar'

export default function Navbar({bgNavbar}){
    return (
        <nav className={`${styles.nav_container} ${bgNavbar === true ? (styles['nav_container_scroll']) : ('')}`}>
            <ul>
                <ItemNavbar to="#home" name="Home" />
                <ItemNavbar to="#about" name="About" />
                <ItemNavbar to="#resume" name="Resume" />
                <ItemNavbar to="#works" name="Works" />
                <ItemNavbar to="#testimonials" name="Testimonials" />
                <ItemNavbar to="#contact" name="Contact" />
            </ul>
        </nav>
    )
}