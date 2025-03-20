import List from "./List";
import React, { useState, useEffect } from "react";

function mapItems({item}){
    return item.map((v,i) => ({key: i.toString(),value}));
}

function FilterSort({data,text,asc}){
    return data
    .filter((i) => text.length === 0 || i.include(text))
    .sort(
        asc
        ?(a,b) => (b > a ? -1 : a===b ? 0 : 1)
        :(a,b) => (a > b ? -1 : a===b ? 0 : 1)
    )
}

export default function ListContainer(){
   
    const[asc,setAsc] = useState(true);
    const[filter,setFilter] = useState("");
    const[data,setData] = useState(
        FilterSort(new Array(80).fill(null).map((v,i) => `Item ${i}`) , "")
    );

    return(
        <List 
        data={mapItems(data)}
        asc={asc}
        onFilter={ text => {
            setFilter(text);
            setData(FilterSort(data,text,asc))
        }}
        onSort={() => {
            setAsc(!asc);
            setData(FilterSort(data,filter,asc))

        }}
        />
    )

 }