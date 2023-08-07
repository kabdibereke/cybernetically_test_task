
import styles from './Header.module.scss'
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className={styles.header}>
        <div className="container">
           <div className={styles.wrapper}>
                 <motion.h1 className={styles.title}
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.4 }}>
                    Cybernetically Test Task
                </motion.h1>
           </div>
        </div>
    </header>
  )
}

export default Header