import BtnAnchor from '../layout/BtnAnchor'
import Social from '../layout/Social'
import styles from './Home.module.css'

export default function Home(){
    return (
        <section className={styles.home_container} id="home">
            <div className={styles.content}>
                <h1>Hi, my name is Gabriel</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <Social />
                <div className={styles.btn_container}>
                    <BtnAnchor direction="down" to="about" />
                </div>
            </div>
        </section>
    )
}