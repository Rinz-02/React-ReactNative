import React from "react";

export default function MyButton({click,disabled,text,onClick}){
  return<>
  <p>{click} : clicks</p>
  <button disabled={disabled} onClick={onClick}>{text}</button>
  </>
}