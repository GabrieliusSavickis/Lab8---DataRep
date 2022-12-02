import React from "react";
import axios from "axios";

export class Create extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeURL = this.onChangeURL.bind(this);

        this.state = {
            title: '',
            author: '',
            URL: ''
        }
    }


    // Gets envoked when you press add book
    handleSubmit(event) {
        event.preventDefault();
        console.log(`${this.state.title}`);
        console.log(`${this.state.author}`);
        console.log(`${this.state.URL}`);

        const book = {
            title: this.state.title,
            author: this.state.author,
            URL: this.state.URL
        }
        axios.post('http://localhost:4000/api/books', book)
            .then()
            .catch();
    }



    onChangeBookTitle(event) {
        this.setState({
            title: event.target.value
        })
    }

    onChangeBookAuthor(event) {
        this.setState({
            author: event.target.value
        })
    }

    onChangeURL(event) {
        this.setState({
            URL: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Hello from Create Component!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                        <label>Add Book Author:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                        <label>Add Front Page URL:</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.url}
                            onChange={this.onChangeURL}
                        />
                    </div>
                    <input type="submit" value="Add Book" />
                </form>
            </div>
        );
    }
}