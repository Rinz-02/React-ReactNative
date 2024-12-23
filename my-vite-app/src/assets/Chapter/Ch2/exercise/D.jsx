import { useContext } from 'react'
import './Box'
import { ContextName } from './Box';

export function D (){
    const userName = useContext(ContextName);
    return <>
    <div className='box'>{userName}</div>
    </>
}