import {ACTIONS} from "../App.jsx";
import {useEffect, useState} from "react";
import styles from "./addblog.module.css";

// eslint-disable-next-line react/prop-types
export default function AddBlog({dispatch, blogs}) {
    const [valid,setValid] = useState(false);
    const [blog,setBlog] = useState({id:-1,title:"",description:"",read:false})
    function  handleSubmit(e){
        e.preventDefault();
        // eslint-disable-next-line react/prop-types
        const id = blogs.length > 0 ? Math.max(...blogs.map(blog => blog.id)) + 1 : 0;
        dispatch({type:ACTIONS.ADD, payload: {...blog, id}})
        setBlog({id:-1,title:"",description:"",read:false})
    }
    
    useEffect(() => {
        blog.title.length >= 3 && blog.description.length >= 3 ? setValid(true) : setValid(false);
    }, [blog]);
    
    return (
      
        <form className={styles.con}>
            <div className={styles.gridItem}>Title:</div>
            <input className={styles.gridItem} type="text"
                   onChange={event => setBlog({...blog, title: event.target.value})} value={blog.title}/>
            <div className={styles.gridItem}>Description:</div>
            <textarea className={styles.gridItem} type="text"
                      onChange={event => setBlog({...blog, description: event.target.value})}
                      value={blog.description}/>
            { valid ? <button className={styles.gridItem} type="submit" onClick={e => handleSubmit(e)}>Submit</button>: <div className={styles.gridItem}>length of both has to be greater than 3</div>}
        
        
        </form>
    );
}
