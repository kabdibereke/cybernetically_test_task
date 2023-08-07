
import { tableHead } from '../../mock/tableHead'
import { ICompany } from '../../interface/interface'
import TableItem from '../Table/TableItem'
import { motion } from 'framer-motion';
type TableItemProps = {
    companies:ICompany[]
}

const TableList = ({companies}: TableItemProps) => {
  return (
    <table
              >  
        <motion.thead 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}>
            <tr>
                {tableHead.map(item=> {
                    return (
                        <th key={item}>{item}</th>
                    )
                })}       
            </tr>
        </motion.thead>
        <tbody>
        
            {companies.map(item=> {
                return <TableItem key={item.companyName} item={item}/>
            })}
        </tbody>
    </table>
  )
}

export default TableList