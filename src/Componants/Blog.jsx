import {useState} from "react";
import {ACTIONS} from "../App.jsx";
import UpdateBlog from "./UpdateBlog.jsx";
import styles from "./blog.module.css";
// eslint-disable-next-line react/prop-types
export default function Blog({blog, dispatch}) {
    const [wantsToUpdate, setWantsToUpdate] = useState(false);



    return (
        // eslint-disable-next-line react/prop-types
        <div className={blog.read ? styles.read : ""}>
            
            <div className={styles.blog} onClick={() => dispatch({type: ACTIONS.READ, payload: blog})}>
                {/* eslint-disable-next-line react/prop-types */}
                <h1>{blog.title}</h1>
                {/* eslint-disable-next-line react/prop-types */}
                <h2 className={styles.blogDescription}>{blog.description}</h2>
            </div>
            
            {wantsToUpdate && blog ?
                // eslint-disable-next-line react/prop-types
                <UpdateBlog dispatch={dispatch} blogid={blog.id} setWantsToUpdate={setWantsToUpdate}/>
                : <button onClick={() => setWantsToUpdate(true)}>edit</button>}
            
            
            <button onClick={() => dispatch({type: ACTIONS.REMOVE, payload: blog})}>remove</button>
        
        
        </div>
    );
}
