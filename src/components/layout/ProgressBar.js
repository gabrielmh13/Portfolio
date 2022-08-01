import styles from './ProgressBar.module.css'

export default function ProgressBar({skills, perc}){
    return (
        <div className={styles.bar_container}>
            <div className={styles.skills_container}>
                {skills.split(' ').map((skill) => (
                    <p key={skill}>{skill}</p>
                ))}
            </div>
            <div className={styles.bar}>
                <div style={{width: `${perc}%`}} />
            </div>
        </div>
    )
}