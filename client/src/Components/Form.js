import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Typography, Button } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
    textbox:{
        position:"relative",
        right:'190px',
        padding:'10px'
    },
    textboxs:{
        position:"relative",
        right:'10px',
        padding:'10px'

    },
    like:{
        position:"relative",
        right:'190px',
        top:'15px'
        

    },
    likes:{
        position:"relative",
        right:'10px',
        

    },
    subtitle:{
        position:"relative",
        right:'295px',
        bottom:'10px'
    },
    subtitle2:{
        position:"relative",
        right:'280px',
        bottom:'10px'
    },
    buttons:{
        position:"relative",
        right:'290px',
        marginBottom:'20px'
    },
    buttons2:{
        position:"relative",
        right:'575px',
        top:'75px',
        marginBottom:'40px'
    }
})

export const Form = ({ handleCheckText, checkStock, handleCompareTextOne, compareStockOne, handleCompareTextTwo, compareStockTwo, checked, checkedTwo, handleChecked, handleCheckedTwo, checkStockOptions, compareStockOptions }) => {
    
 
  const classes = useStyles()
    return (
        <div>
            <Typography className={classes.subtitle}>
                Check Stock
            </Typography>
            <TextField id="stock" label="Enter Stock" variant="outlined" value={checkStock} onChange={handleCheckText} className={classes.textbox} />

            <FormControlLabel className={classes.like}
        control={<Checkbox checked={checked}  icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedA" onChange={handleChecked} />}
        label="Like"
      />
      <br></br>
        <Button variant="contained" className={classes.buttons} onClick={checkStockOptions} color="primary">
                Search
        </Button>
        <br></br>
            <Typography className={classes.subtitle2}>
                Compare Stocks
            </Typography>
            <TextField id="stock" label="Enter Stock" variant="outlined" value={compareStockOne} onChange={handleCompareTextOne} className={classes.textboxs} />
            <TextField id="stock" label="Enter Stock" variant="outlined" value={compareStockTwo} onChange={handleCompareTextTwo} className={classes.textboxs} />
            <FormControlLabel className={classes.likes}
            control={<Checkbox checked={checkedTwo} icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedA" onChange={handleCheckedTwo} />}
        label="Like Both"
      />
      <Button variant="contained" className={classes.buttons2} onClick={compareStockOptions} color="primary">
                Compare
        </Button>
     
      
            
        </div>
    )
}
