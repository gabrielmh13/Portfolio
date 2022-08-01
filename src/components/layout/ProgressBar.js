import styles from './ProgressBar.module.css'

export default function ProgressBar({name, perc}){
    return (
        <div className={styles.bar_container}>
            <label>{name}</label>
            <div className={styles.bar}>
                <div style={{width: `${perc}%`}} />
            </div>
        </div>
    )
}