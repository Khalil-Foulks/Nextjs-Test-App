import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'

const Layout = ({ children }) => {
    return (
        <>
        <Nav />
            <div className={styles.container}>
                <main className= {styles.main}>
                    <Header />
                    {/* <h2>This will appear on every page that uses the Layout component</h2> */}
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout