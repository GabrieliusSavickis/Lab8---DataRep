import React  from "react";
import {Books} from "./books";
import axios from "axios";

export class Read extends React.Component{
    
    componentDidMount() {
        axios.get('http://localhost:4000/api/books')
        .then(
            (response)=>{
                this.setState({
                    books:response.data
                })            
            }
        )
        .catch((error)=>{
            console.log(error)
        });
    }

    state={
        books:[
            
        ]
    }
    
    render(){
        return(
            <div>
                <h2>Read Component</h2>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}