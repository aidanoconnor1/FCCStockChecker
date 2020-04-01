import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Typography, Button } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    textbox:{ 
        float:'left',    
        padding:'10px',
        marginLeft:'12%',
        width:'80%'

    },
    textboxs:{
        float:'left',
        padding:'10px',
        marginLeft:'16%'
    },
    like:{
       float:'left',
       position:"relative",   
       top:'20%',
    },
    likes:{
    },
    subtitle:{ 
        float:'left',
        marginLeft:'7%'  
    },
    subtitle2:{      
    },
    buttons:{     
        marginBottom:'2%',
        marginTop:'2%'
        
    },
    buttons2:{   
        marginBottom:'40px'
    },padding:{
        padding:'10px'
    },margin:{
        marginBottom:'20px'
    }
}))



export const Form = ({ handleCheckText, checkStock, handleCompareTextOne, compareStockOne, handleCompareTextTwo, compareStockTwo, checked, checkedTwo, handleChecked, handleCheckedTwo, checkStockOptions, compareStockOptions }) => {
    const theme = useTheme()

const fullScreen = useMediaQuery(theme.breakpoints.up('lg'))

const xsScreen = useMediaQuery(theme.breakpoints.down('sm'))

const smallScreen = useMediaQuery(theme.breakpoints.down("md"))
const likeFix = useMediaQuery('(min-width:1659)')
 
  const classes = useStyles()
   
  return (
        <div>
            <Grid container >
            <Grid item xs={12}>
                
                 {smallScreen &&
                 <Typography >
                  Check Stock
                  </Typography>
}
                    {fullScreen &&
                         <Typography  className={classes.subtitle}> Check Stock
                
                </Typography>
                 }
            </Grid>
            <Grid item xs={12} lg={6} >

  {smallScreen && <TextField id="stock" label="Enter Stock" variant="outlined" value={checkStock} onChange={handleCheckText} className={classes.padding} /> }
  {fullScreen && <TextField id="stock" label="Enter Stock" variant="outlined" value={checkStock} onChange={handleCheckText} className={classes.textbox} />}
            </Grid>
        <Grid item xs={12} lg={6}>
        {smallScreen &&   <FormControlLabel 
        control={<Checkbox checked={checked}  icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedA" onChange={handleChecked} />}
        label="Like"
        
  /> }
  {fullScreen && <FormControlLabel className={classes.like}
        control={<Checkbox checked={checked}  icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedA" onChange={handleChecked} />}
        label="Like"  
  /> }

      
      </Grid>
     <Grid item xs={12}>
         {smallScreen &&
        <Button variant="contained"  onClick={checkStockOptions} className={classes.marginBottom} color="primary">
                Search
        </Button>
        } {fullScreen && 
            <Button variant="contained" className={classes.buttons} onClick={checkStockOptions} color="primary">
                Search
        </Button>
        }
        </Grid>
        
        <Grid item xs={12}>
            {smallScreen &&  
            <Typography className={classes.padding} >
                Compare Stocks
            </Typography> 
}      { fullScreen && <Typography className={classes.subtitle}>
                Compare Stocks
            </Typography>
}
        </Grid>
            <Grid item xs={12} sm={6} md={4} >
             {  smallScreen && 
            <TextField id="stock" label="Enter Stock" variant="outlined" value={compareStockOne} onChange={handleCompareTextOne} className={classes.padding} />
             }{fullScreen && 
              <TextField id="stock" label="Enter Stock" variant="outlined" value={compareStockOne} onChange={handleCompareTextOne} className={classes.textboxs} />
              }
            </Grid>
             
        
          <Grid item xs={12} sm={6} md={4}>
            <TextField id="stock" label="Enter Stock" variant="outlined" value={compareStockTwo} onChange={handleCompareTextTwo} className={classes.padding} />
                 </Grid>

            <Grid item xs={12} sm={6} md={4}>
                {smallScreen &&
                       <FormControlLabel className={classes.likes}
                       control={<Checkbox checked={checkedTwo} icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedA" onChange={handleCheckedTwo} />}
                   label="Like Both"
                 /> 
                }
                {fullScreen &&
            <FormControlLabel className={classes.like}
            control={<Checkbox checked={checkedTwo} icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedA" onChange={handleCheckedTwo} />}
        label="Like Both"
                
      />
                }
      </Grid>
      
       <Grid item xs={12}>
           {smallScreen &&
      <Button variant="contained" className={classes.padding} onClick={compareStockOptions} color="primary">
                Compare
        </Button>
        }
        {fullScreen &&  <Button variant="contained" className={classes.buttons} onClick={compareStockOptions} color="primary">
                Compare
        </Button> }
        </Grid>
     
        </Grid>
            
        </div>
    )
}
