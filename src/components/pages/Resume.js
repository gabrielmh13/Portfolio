import styles from './Resume.module.css'

import ProgressBar from '../layout/ProgressBar'

export default function Resume(){
    return (
        <section id="resume" className={styles.resume_container}>
            <div className={styles.text_container}>
                <div className={styles.title_container}>
                    <p>EDUCATION</p>
                </div>
                <div className={styles.description_container}>
                    <h2>Universidade do Vale do Itajaí</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
            <div className={styles.text_container}>
                <div className={styles.title_container}>
                    <p>CAREER</p>
                </div>
                <div className={styles.description_container}>
                    <h2>Carson BMI - <span>Since March 2021</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
            <div className={styles.text_container}>
                <div className={styles.title_container}>
                    <p>SKILLS</p>
                </div>
                <div className={styles.description_container}>
                    <ProgressBar skills="HTML CSS Javascript" perc="80" />
                    <ProgressBar skills="PHP Node.js React JS" perc="50" />
                    <ProgressBar skills="PostgreSQL MySQL SQL Server MongoDB" perc="40" />
                    <ProgressBar skills="Apache Nginx" perc="40" />
                    <ProgressBar skills="Windows Linux" perc="80" />
                </div>
            </div>
        </section>
    )
}