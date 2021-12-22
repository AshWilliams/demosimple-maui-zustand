import React from "react";
import { useStyles} from "../Styles";
import { Button, Typography, Checkbox }  from '@mui/material';


export const MyButton = (props) =>{  
  let handleClick = () => props.onClickFunction(props.increment);
  return (
    <Button variant="contained" color="primary" onClick={handleClick}>{ props.add ? '+': ''}{props.increment}</Button>
    );
}

export const Display = (props) =>{
  const classes = useStyles();
  return (
    <Typography className={classes.typo} variant="h6" gutterBottom component="div">{props.text}</Typography> 
  );
}

export default { MyButton, Display }