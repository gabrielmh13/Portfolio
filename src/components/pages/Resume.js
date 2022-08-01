import styles from './Resume.module.css'

import ProgressBar from '../layout/ProgressBar'

export default function Resume(){
    return (
        <section id="resume" className={styles.resume_container}>
            <div className={styles.text_container}>
                <div className={styles.label_container}>
                    <label>EDUCATION</label>
                </div>
                <div className={styles.description_container}>
                    <h2>Universidade do Vale do Itajaí</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
            <div className={styles.text_container}>
                <div className={styles.label_container}>
                    <label>CAREER</label>
                </div>
                <div className={styles.description_container}>
                    <h2>Carson BMI - <span>Since March 2021</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
            <div className={styles.text_container}>
                <div className={styles.label_container}>
                    <label>SKILLS</label>
                </div>
                <div className={styles.description_container}>
                    <ProgressBar name="HTML, CSS, Javascript" perc="80" />
                    <ProgressBar name="PHP, Node.js, React JS" perc="50" />
                    <ProgressBar name="PostgreSQL, MySQL, SQL Server, OracleDB" perc="40" />
                    <ProgressBar name="Apache, Nginx" perc="40" />
                    <ProgressBar name="Windows, Linux" perc="80" />
                </div>
            </div>
        </section>
    )
}