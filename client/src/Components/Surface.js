import React, { useState } from 'react'
import Typed from 'react-typed';
import { Form } from './Form'
import { Paper, Typography } from '@material-ui/core'
import 'typeface-roboto'
import { makeStyles } from '@material-ui/core/styles'
import  Help  from './Help'
const axios = require('axios');



const useStyles = makeStyles({
    text:{
    fontFamily:'typeface-roboto',
    padding:'10px'
    
    },
    surface:{
        position:"relative",
        width:'700px',
        height:'380px',
        left:'600px',
        top:'250px',
        borderRadius:'10px'
    }
})

export const Surface = () => {
    const [stockData, setStockData] = useState([''])
    const [checkStock, setCheckStock] = useState('')
    const [compareStockOne, setCompareStockOne] = useState('')
    const [compareStockTwo, setCompareStockTwo] = useState('')
    const [checked, setChecked] = React.useState(false)
    const [checkedTwo, setCheckedTwo] = React.useState(false)

    const handleCheckText = (e) => {
        setCheckStock(e.target.value)
    }
    const handleCompareTextOne = (e) => {
     setCompareStockOne(e.target.value) 
    }
    const handleCompareTextTwo = (e) => {
        setCompareStockTwo(e.target.value) 
       }
       const handleChecked = () => {
        setChecked(!checked)
    }
    const handleCheckedTwo = () => {
        setCheckedTwo(!checkedTwo)
    }
    const checkStockOptions = () => {
        if(checked){
            checkStockLikeRequest()
        } else 
        checkStockRequest()
    }
    const checkStockLikeRequest = () => {
        axios.get(`https://fccstockchecker.herokuapp.com/api/stock-prices?stock=${checkStock}&like=true`)
        .then((data) => setStockData([JSON.stringify(data.data.stockData)] )) 
    }
    const checkStockRequest = () => {
     
        axios.get(`https://fccstockchecker.herokuapp.com/api/stock-prices?stock=${checkStock}`)
        .then((data) => setStockData([JSON.stringify(data.data.stockData)] )) 
       
    }

    const compareStockOptions = () => {
        if(checkedTwo) {
            compareLikeRequest()
        } else {
            compareRequest()
        }
    }
    const compareLikeRequest = () => {
        axios.get(`https://fccstockchecker.herokuapp.com/api/stock-prices?stock=${compareStockOne}&stock=${compareStockTwo}&like=true`)
        .then((data) => setStockData([JSON.stringify(data.data.stockData)] )) 
       
    }
    const compareRequest = () => {
        axios.get(`https://fccstockchecker.herokuapp.com/api/stock-prices?stock=${compareStockOne}&stock=${compareStockTwo}`)
        .then((data) => setStockData([JSON.stringify(data.data.stockData)] )) 
       
    }


//

    const classes = useStyles()

    return (
        <div>
      <Help />
            
            <Paper elevation={2} className={classes.surface}>
                <Typography variant="h4" className={classes.text} >
                    Nasdaq Stock Price Checker
                </Typography>
                <Form checkStock={checkStock} handleCheckText={handleCheckText} 
                compareStockOne={compareStockOne} compareStockTwo={compareStockTwo}
                 handleCompareTextOne={handleCompareTextOne} handleCompareTextTwo={handleCompareTextTwo}
                  checked={checked} checkedTwo={checkedTwo} handleChecked={handleChecked}
                   handleCheckedTwo={handleCheckedTwo} checkStockOptions={checkStockOptions}
                   compareStockOptions={compareStockOptions}  />
                   <br></br>
                   <br></br>
                <Typed  strings={stockData} typeSpeed={30}  loop />
               
                
            </Paper>
            
            
        </div>
    )
}
