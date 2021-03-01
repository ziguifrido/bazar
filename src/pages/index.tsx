import { AiFillHeart } from 'react-icons/ai'
import styles from '../styles/pages/index.module.css'
import ProductListPage from './ProductListPage'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.homeHeader}>
        <img src="https://github.com/ziguifrido.png" alt="Avatar"/>
        <strong>Bazar do Marcos</strong>
      </header>
      <main className={styles.homeMain}>
        <ProductListPage />
      </main>
      <hr />
      <footer className={styles.homeFooter}>
        <p>
          Made with <AiFillHeart /> by
          <a href="https://marcosoliveira.dev" target="_blank" rel="noreferrer">
            &nbsp;Marcos Oliveira
          </a>
        </p>
      </footer>
    </div>
  )
}
