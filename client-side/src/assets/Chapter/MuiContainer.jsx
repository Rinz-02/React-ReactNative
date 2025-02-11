import React from 'react'
import {Container, Typography} from '@mui/material';

function MuiContainer() {
    const textStyle = {
        backgroundColor: "#cfe8fc",
        margin: 10,
        textAlign: "center",
    }
  return (
     <>
     <Container maxWidth="sm">
        <Typography style={textStyle}>sm</Typography>
     </Container>
     <Container maxWidth="md">
        <Typography style={textStyle}>md</Typography>
     </Container>
     <Container maxWidth="lg">
        <Typography style={textStyle}>lg</Typography>
     </Container>
     </>
  )
}

export default MuiContainer
