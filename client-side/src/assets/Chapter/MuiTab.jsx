import React from 'react'
import { BrowserRouter as Router, Route, Link, useNavigate } from "react-router-dom"; 
import AppBar from "@mui/material/AppBar";
import Tab from "@mui/material/Tab"; 
import Tabs from "@mui/material/Tabs"
import Typography from "@mui/material/Typography";
import { Fragment } from 'react';
import Box from "@mui/material/Box"

const tabContentStyle = {padding : 16}
export function MuiTab({value}) {
    const nav = useNavigate();
  return (
    <AppBar positon="static">
        <Tabs value={value}>
            <Tab label="Item One"  onClick={() => nav("/")}/>
            <Tab label="Item Two"  onClick={() => nav("/page2")}/>
            <Tab label="Item Three"  onClick={() => nav("/page3")}/>
        </Tabs>
    </AppBar>
  )
}



export function DefaultTab(){
    return(
        <Fragment>
         <Box value={0} />
         <Typography component="div" style={tabContentStyle}> 
            Item One
         </Typography>
        </Fragment>
    )
}

export function DefaultTab2(){
    return(
        <Fragment>
         <Box value={1} />
         <Typography component="div" style={tabContentStyle}> 
            Item Two
         </Typography>
        </Fragment>
    )
}

export function DefaultTab3(){
    return(
        <Fragment>
         <Box value={2} />
         <Typography component="div" style={tabContentStyle}> 
            Item Three
         </Typography>
        </Fragment>
    )
}