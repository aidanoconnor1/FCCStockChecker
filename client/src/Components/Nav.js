import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import { makeStyles } from '@material-ui/core/styles'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
    root:{
        width:500
    },
    stickToBottom: {
        width: '260px',
        marginTop:'10%',
        color:'blue',
        margin:'15px',
        borderRadius:'10px', 
        boxShadow: theme.shadows[3]    
      },
      nav:{
        border: '2px solid #000',
    boxShadow: theme.shadows[5],
      },text:{
        largeIcon:{
          width:'100%',
          height:'100%'
        }

      }
     
}))



const Nav = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState('')
   const fccLink = "https://www.freecodecamp.org/learn/information-security-and-quality-assurance/information-security-and-quality-assurance-projects/stock-price-checker" 
  const githublink = "https://github.com/aidanoconnor1/FCCStockChecker"
   return (
     
    <Grid container justify="center">
    <BottomNavigation
    
    
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
    setInterval(() => {
        setValue('')
    }, 2000);
  }}
  showLabels
  className={classes.stickToBottom}
>
  <BottomNavigationAction  icon={<PersonOutlineOutlinedIcon />} /> 
  <a href={fccLink} className={classes.text}> <BottomNavigationAction label="FreeCodeCamp" icon={<CodeIcon />} /> </a>
  <a href={githublink} ><BottomNavigationAction label="GitHub" icon={<GitHubIcon />} /> </a>
</BottomNavigation>
</Grid>

)}

export default Nav;