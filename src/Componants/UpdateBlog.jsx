import { useState, useEffect } from "react";
import {ACTIONS} from "../App.jsx";
import styles from "./updateblog.module.css";

// eslint-disable-next-line react/prop-types
export default function UpdateBlog({ blogid, dispatch ,setWantsToUpdate}) {
    const [valid,setValid] = useState(false);

    const [blog, setBlog] = useState({ id: blogid, title: "", description: "", read: false });
    useEffect(() => {
        blog.title.length >= 3 && blog.description.length >= 3 ? setValid(true) : setValid(false);
    }, [blog]);
    function  handleUpdate(e){
        e.preventDefault();
        dispatch({type:ACTIONS.UPDATE, payload: blog}) // dispatch the updated blog state
        setWantsToUpdate(false);
    }


    return (
        <form>
            Title: <input type="text" onChange={(event) => setBlog({ ...blog, title: event.target.value })} value={blog.title} /><br />
            Description: <input type="text" onChange={(event) => setBlog({ ...blog, description: event.target.value })} value={blog.description} /><br />
            {valid ? <button type="submit" onClick={(e) => handleUpdate(e)}>Update</button> :
                <p>lenght of both has to be greater than 3</p>}

        </form>
    );
}
