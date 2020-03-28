import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root:{
        width:500
    },
    stickToBottom: {
        width: '30%',
        position: 'relative',
        top:'450px',
        right:'-670px',
        bottom: 0,
        color:'blue',
        margin:'15px',
      
        boxShadow: theme.shadows[3]    
      },
      nav:{
        border: '2px solid #000',
    boxShadow: theme.shadows[5],
      }
}))

const Nav = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState('')
    
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
  <BottomNavigationAction label="Help" icon={<FavoriteIcon />} />
  <BottomNavigationAction label="FreeCodeCamp" icon={<CodeIcon />} />
  <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} />
</BottomNavigation>

)}

export default Nav;