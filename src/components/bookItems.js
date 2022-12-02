import React from "react";
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

export class BookItems extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.book.cover}></img>
                            <footer className="blockquote mb-0">
                                {this.props.book.author}
                            </footer>
                        </blockquote>
                    </Card.Body>
                <Link to={'/edit/'+this.props.book._id} className="btn btn-primary">Edit</Link>
                </Card>
            </div>
        );
    }
}