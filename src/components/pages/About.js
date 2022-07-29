import styles from './About.module.css'

import { FaMapMarkerAlt, FaUserAlt, FaPhoneAlt } from 'react-icons/fa'
import { GrMail  } from 'react-icons/gr'


export default function About(){
    return (
        <section id="about" className={styles.about_container}>
            <div className={styles.foto_container}>
                <img src='https://cdn-icons-png.flaticon.com/512/1361/1361728.png' alt="Foto Gabriel"/>
            </div>
            <div className={styles.text_container}>
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h1>Contact Details</h1>
                
                <ul>
                    <li>
                    <FaUserAlt />Gabriel Magalhães Hernandes
                    </li>
                    <li>
                        <FaMapMarkerAlt />Navegantes, Santa-Catarina, 88370-492
                    </li>
                    <li>
                        <FaPhoneAlt />+55 (47) 99268-5282
                    </li>
                    <li>
                        <GrMail />gabrielmh13@hotmail.com
                    </li>
                </ul>
            </div>
        </section>
    )
}