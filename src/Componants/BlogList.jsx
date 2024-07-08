
import Blog from "./Blog.jsx";
import styles from "./bloglist.module.css";

// eslint-disable-next-line react/prop-types
export default function BlogList({ blogs, dispatch }) {
    return (
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            {blogs.sort((a, b) => {
                    if (a.read === b.read) {
                        return b.id - a.id;
                    } else {
                        return a.read ? 1 : -1;
                    }
                })
                .map((blog) => (
                    <Blog key={blog.id} dispatch={dispatch} blog={blog} /> // Use the 'key' property
                ))}
        </div>
    );
}
