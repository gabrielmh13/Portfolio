import styles from './Resume.module.css'

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
                    <label>WORKS</label>
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
                    <h2>Univali - Universidade do Vale do Itajaí</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
        </section>
    )
}