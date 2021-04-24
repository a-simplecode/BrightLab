import styles from './container.module.css'

export default function Container({ children }) {

    return (
        <div className={styles.root}>
            {children}
        </div>
    );
}

export function RenderRows({ left, right }) {

    return (
        <div className={styles.row}>
            <div className={styles.left}>{left}</div>
            <div className={styles.right}>{right}</div>
        </div>
    );
}