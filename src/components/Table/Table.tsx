import React, { useEffect, useState } from 'react'
import styles  from './Table.module.scss'
import Pagination from '@mui/material/Pagination';
import {symbol} from '../../mock/symbol'
import { useResponse } from '../../hooks/useRespones';
import { ClipLoader } from 'react-spinners';
import TableList from './TableList';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch,RootState } from '../../store';
import { deleteAll, setCompanies } from '../../store/slice/companySlice';
const Table = () => {
    const apiKey= import.meta.env.VITE_API_KEY;
    const [page, setPage] = useState(1);
    const {loading,error,request} =useResponse()
    const {companies} = useSelector((item:RootState)=> item.companyList)
    const dispatch = useDispatch<AppDispatch>()
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);  
    };
    
    useEffect(()=> {
        dispatch(deleteAll())
        symbol.slice(page*10-10,page*10).forEach(symbol=> {
            const data =request(`https://api.iex.cloud/v1/data/core/quote/${symbol}?token=${apiKey}`)
            data.then(res=>dispatch(setCompanies(res)))
        })
    },[page])
        

  return (
    <div className="container">
        <div className={styles.wrapper}>
            <div className={styles.overflow}>
               <TableList companies={companies}/>
            </div>
            {loading && 
            <div className={styles.loading}>
                 <ClipLoader
                    color="#000000"
                    size={80}
                />
            </div>}
            {error && 
            <div className={styles.error}>
                <p>Something wrong... Please try later</p>
            </div>}
           {!loading && !error?  <div className={styles.pagination}>
                <Pagination size='small' count={1112} page={page} onChange={handleChange}/>
            </div>:''}
        </div>
    </div>
  )
}

export default Table