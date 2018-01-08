import React from "react";
import {render} from "react-dom";

/* const ListComment = ({comment}) => (
    <div>
        <h3>{comment.title}</h3>
        <p>{comment.desc}</p>
        <div>
            <input type="button" value="Edit" />
        </div>
    </div>
); */

/* const ListComment = (parameter) => (
    <div>
        <h3>{parameter.comment.title}</h3>
        <p>{parameter.comment.desc}</p>
    </div>
); */
class ListComment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing : false
        }
        this.handleClickEvent = () => {
            this.setState({
                isEditing : true
            })
        }
        this.handleSaveEvent = () => {
            this.setState({
                isEditing : false
            })
        }
    }
    render()
    {
        if(!this.state.isEditing)
        {
            return(
                <div>
                    <h3>{this.props.comment.title}</h3>
                    <p>{this.props.comment.desc}</p>
                    <div>
                        <input type="button" value="Edit" onClick={this.handleClickEvent} />
                    </div>
                </div> 
            )
        }else{
            return(
                <div>
                    <input type="text" placeholder="title" /> <br />
                    <textarea placeholder="descrption"></textarea><br />
                    <input type="button" value="save" onClick ={this.handleSaveEvent} />
                </div>
            )
            
        }
        
    }   

}

export default ListComment; 