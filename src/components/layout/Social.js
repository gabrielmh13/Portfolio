import styles from './Social.module.css'

import {BsInstagram, BsLinkedin, BsGithub} from 'react-icons/bs'

export default function Social(){
    return (
        <>
            <ul className={styles.social_list}>
                <li>
                    <a href='https://www.linkedin.com/in/gabriel-hernandes-b18582210' target="_blank" rel="noreferrer"><BsLinkedin /></a>
                </li>
                <li>
                    <a href='https://github.com/gabrielmh13' target="_blank" rel="noreferrer"><BsGithub /></a>
                </li>
                <li>
                    <a href='https://instagram.com/gabriellhernandes/' target="_blank" rel="noreferrer"><BsInstagram /></a>
                </li>
            </ul>
        </>
    )
}