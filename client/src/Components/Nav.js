import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import { makeStyles } from '@material-ui/core/styles'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';



const useStyles = makeStyles(theme => ({
    root:{
        width:500
    },
    stickToBottom: {
        width: '15%',
        position: 'relative',
        top:'450px',
        right:'-780px',
        bottom: 0,
        color:'blue',
        margin:'15px',
        borderRadius:'10px',
      
        boxShadow: theme.shadows[3]    
      },
      nav:{
        border: '2px solid #000',
    boxShadow: theme.shadows[5],
      },
     
}))

const Nav = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState('')
   const fccLink = "https://www.freecodecamp.org/learn/information-security-and-quality-assurance/information-security-and-quality-assurance-projects/stock-price-checker" 
  const githublink = "https://github.com/aidanoconnor1/FCCStockChecker"
   return (
     
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
  <a href=""><BottomNavigationAction  icon={<PersonOutlineOutlinedIcon />} /> </a>
  <a href={fccLink} className={classes.text}> <BottomNavigationAction label="FreeCodeCamp" icon={<CodeIcon />} /> </a>
  <a href={githublink} ><BottomNavigationAction label="GitHub" icon={<GitHubIcon />} /> </a>
</BottomNavigation>

)}

export default Nav;