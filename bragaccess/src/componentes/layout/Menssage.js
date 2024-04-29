import React,{useEffect,useState} from "react";
import styles from "./Menssage.module.css"

function Menssage({type,msg}){
    const [visible,setVisible]=useState(false)

    useEffect(()=>{
        if(!msg){
            setVisible(false)
            return
        }
        setVisible(true)

        const timer=setTimeout(()=>{
            setVisible(false)
        },10000)
         
        return()=>clearTimeout(timer)

    },[msg])

    
    return (
        <>
            {visible &&(
                <div className={`${styles.menssage} ${styles[type]}`}>{msg}</div>
            )}
        </>
    )
    /*const [visible,setVisible]=useState(false)
    
    useEffect(()=>{
        if(!msg){
            setVisible(false)
            return
        }
        setVisible(true)

        const time=setTimeout(()=>{
            setVisible(false)
        },3000)
         
        return()=>clearTimeout(time)

    },[msg])
    return (
        <div>

        </div>
        {/*<div>
            {visible &&(
                <div className={`${styles.menssage} ${styles[type]}`}>
                    {msg}
                </div>

            )}
           
            </div>
    )*/
}

export default Menssage