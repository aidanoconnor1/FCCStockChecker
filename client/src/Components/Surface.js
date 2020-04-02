import React, { useState } from 'react'
import Typed from 'react-typed';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles'
import { Form } from './Form'
import { Paper, Typography } from '@material-ui/core'
import 'typeface-roboto'
import { makeStyles } from '@material-ui/core/styles'
import  Help  from './Help'
import MobileHelp from './MobileHelp'
const axios = require('axios');


const useStyles = makeStyles({
    text:{
    fontFamily:'typeface-roboto',
    padding:'10px'
    
    },
    surface:{
        position:"relative",
        marginTop:'5%',
        width:'40%',
        height:'380%',
        left:'30%',
        top:'0%',
        borderRadius:'10px',
        
    },
    border:{
        position:"relative",
        justifyContent:"center",
        left:'5%',
        top:'0%',
        width:'90%',
        height:'420%',
        marginTop:'5%',
        borderRadius:'10px'
    },
    result:{
        position:"relative",
        bottom:"10%"
    }
})

export const Surface = () => {
    const [stockData, setStockData] = useState([''])
    const [checkStock, setCheckStock] = useState('')
    const [compareStockOne, setCompareStockOne] = useState('')
    const [compareStockTwo, setCompareStockTwo] = useState('')
    const [checked, setChecked] = useState(false)
    const [checkedTwo, setCheckedTwo] = useState(false)
    const [lineOne, setLineOne] = useState([''])
    const [lineTwo, setLineTwo] = useState([''])
    const [bothLines, setBothLines] = useState([''])

    const theme = useTheme()    
    const classes = useStyles()
    const fullScreen = useMediaQuery(theme.breakpoints.up('md'))
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"))

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
        .then((data) => setStockData([JSON.stringify(data.data.stockData)] ) ) 
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




    return (
        <div>
    
    {smallScreen && 
<>      
        
        <Paper elevation={2} className={classes.border}>
        <MobileHelp />
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
            <Typed className={classes.result}  strings={stockData} typeSpeed={30}  loop />
            <br></br>
            <br></br>
            <br></br>
            
        </Paper>
        </>}


{fullScreen &&  
<>     
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
                   <br></br>
                   <br></br>

            </Paper>
            </>
}
            
        </div>
    )
}
