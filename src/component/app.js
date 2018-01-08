import React from "react";
import AddComment from "./addComment";
import ListComment from "./listComment";
import Comments from "../data/commentsData";
const App = () => (
    <div>
        <h1>This is comment Manger App</h1>
        <div className="addComment">
            <AddComment />
        </div>
        <div className="listComment">
            {
                Comments.map( (comments) => (
                    <ListComment comment={comments} />
                ))
            }
          
        </div>
    </div>
);
export default App; 