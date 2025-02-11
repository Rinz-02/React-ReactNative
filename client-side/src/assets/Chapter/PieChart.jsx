
import React from 'react'
import {PieChart} from '@mui/x-charts'

function ChartContainer() {
  return (
    <div>
      <PieChart 
      series ={ [
        {
            data : [
            {id:0,value: 30, colors: "orange", label: "pie i haven't eaten"},
            {id:1,value: 15, colors: "grey",  label : "pie i have eaten"}
            ]
    }
      ]}
      width={400}
      height={400}>

      </PieChart>
    </div>
  )
}

export default ChartContainer
