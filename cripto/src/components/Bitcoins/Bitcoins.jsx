import React, { useState, useEffect } from 'react'
import Cards from '../Cards/Cards'
import Dashboard from '../Dashboard/Dashboard'
import { getCripto } from '../../services/cripto'
import { DashboardAllDataLeft } from '../../mocdata/MocData'
import LeftBitcoins from '../LeftBitcoins/LeftBitcoins'
import './Bitcoin.css'
import { DashboardAllDataRight } from '../../mocdata/MocData'
import Right from '../Right/Right'
import Wallet from '../Wallet/Wallet'
import Btns from '../Btns/Btns'



export default function Bitcoins() {


const [cripto, setCripto] = useState([])
const [sortDirection, setSortDirection] = useState("asc");
const [displayCount, setDisplayCount] = useState(5);
  useEffect(() => {
    getCripto().then((res) => {
      let newArr = res.splice(0, displayCount)
      setCripto(newArr);
    });
  }, [displayCount]);
  const showMore = () => {
    setDisplayCount(displayCount + 5);
};
const showLess=()=>{
  if(displayCount>5){
    setDisplayCount(displayCount -5)
  }
}
  const sortByTitle = () => {
    const sortArr = [...cripto];
  if (sortDirection === 'asc') {
    sortArr.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setSortDirection('desc');
  } else {
    sortArr.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
    setSortDirection('asc');
  }
  setCripto(sortArr)
  }

  const sortByPrice=()=>{
    const sortArr=[...cripto]
    if(sortDirection=== "asc"){
      sortArr.sort((a,b)=>{
        return a.priceUsd-b.priceUsd;
      })
      setSortDirection("desc")
    } else{
      sortArr.sort((a,b)=>{
        return b.priceUsd-a.priceUsd
      })
      setSortDirection("asc")
    }
    setCripto(sortArr)
  }

  const sortByChange=()=>{
    const sortArr=[...cripto]
    if(sortDirection==="asc"){
      sortArr.sort((a,b)=>{
        return a.changePercent24Hr-b.changePercent24Hr;
      })
      setSortDirection("desc")
    }else{
      sortArr.sort((a,b)=>{
        return b.changePercent24Hr-a.changePercent24Hr
      })
      setSortDirection("asc")
    }
    setCripto(sortArr)
  }
  return (
    <div>
      <Dashboard />
      <div className='Bitcoins'>
        <div className='overflow'>
          <Wallet />
          {DashboardAllDataLeft.map((bit) => {
            return <LeftBitcoins key={bit.id} bit={bit} />
          })}
        </div >
        <div className='changeCripto'>
          <Btns sortByTitle={sortByTitle} sortByPrice={sortByPrice} sortByChange={sortByChange} />
          <div className='myCards'>
            {cripto.map((data) => {
              return <Cards key={data.id} cripto={data} />
            })}
          </div>
       <button onClick={showMore}>show more</button>  
       <button onClick={showLess}> show less</button> 
        </div>
        <div className='third'>
          {DashboardAllDataRight.map((coins) => {
            return <Right key={coins.id} coins={coins} />
          })}
        </div>

      </div>

    </div>
  )
}
