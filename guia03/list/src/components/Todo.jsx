import React, { useState} from 'react'
import styles from "..//app/page.module.css"
const Todo = ({todo,index,deleteTodo}) => {
 return (
 <> 
    <div className={styles.list}>
    <h3 className='Tìtulo3'>{todo}</h3>
    <button className={styles.btn_delete} onClick={()=>deleteTodo(index)}>X</button>

    </div>
 </>
 )
}
export default Todo
