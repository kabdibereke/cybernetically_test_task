import styles from './Table.module.scss'
import { ICompany } from '../../interface/interface'
import { motion } from 'framer-motion';
type TableItemProps = {
    item:ICompany
}

const TableItem = ({item}: TableItemProps) => {
  return (
    <motion.tr 
    initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }} >    
        <td>{item.companyName}</td>
        <td>{item.symbol}</td>
        <td>{item.avgTotalVolume}</td>
        <td>{item.primaryExchange}</td>
        <td className={item.change<0? styles.red: styles.green} >{item.change || 'N/A'}</td>
        <td>{new Date(item.latestUpdate).toLocaleTimeString('en-GB')}</td>
        <td className={item.peRatio? item.peRatio<0? styles.red: styles.green: styles.default}>{item.peRatio || 'N/A'}</td>
        <td>{item.iexClose || 'N/A'}</td>
        <td>{item.iexVolume || 'N/A'}</td>
        <td>{item.iexOpen|| 'N/A'}</td>
        <td>{item.iexRealtimePrice|| 'N/A'}</td>
        <td>{item.latestPrice || 'N/A'}</td>
    </motion.tr>
  )
}

export default TableItem