import styles from './page.module.scss'

export default function PersonDetail({params}) {
    const {id} = params
    return( <main className={styles.main}>
        <h1>Person {id}</h1>
    </main>)
}