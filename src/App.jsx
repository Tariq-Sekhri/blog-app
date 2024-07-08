import { useReducer} from "react";
import AddBlogs from "./Componants/AddBlog.jsx";
import BlogList from "./Componants/BlogList.jsx";
import styles from "./app.module.css";
export const ACTIONS = {
  ADD :"ADD",
  REMOVE :"REMOVE",
  UPDATE:"UPDATE",
  READ:"READ"
}

const reducer = (state, action) => {
  switch(action.type){
    case ACTIONS.ADD:
      console.log("add"+action.payload.title);
      
      return [ action.payload,...state];
    
    case ACTIONS.REMOVE:
      console.log("remove "+action.payload.title);
      return state.filter(blog => blog.id !== action.payload.id);
    
    case ACTIONS.UPDATE:
      console.log("update "+action.payload.title);
      // return state.filter(blog => blog.id !== action.payload.id);
      return state.map(blog => blog.id === action.payload.id ?  action.payload :blog);
      
    case ACTIONS.READ:
      console.log("read "+!action.payload.read);
      return state.map(blog => blog.id === action.payload.id ? {...blog, read:!action.payload.read}: blog);
    
    default:
      console.log("oh no");
      break;
  }
}
export default function App() {
  const initialBlogs = []
  
  
  const [blogs,dispatch] = useReducer(reducer,initialBlogs )
  
  
  
  
  return (
      <div className={styles.con}>
        <AddBlogs dispatch={dispatch} blogs={blogs}/>
        <BlogList blogs={blogs} dispatch={dispatch} />
      </div>
  )
}