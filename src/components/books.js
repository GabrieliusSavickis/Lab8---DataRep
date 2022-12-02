import React from "react";
import { BookItems } from "./bookItems";

export class Books extends React.Component {
    render() {
        return this.props.books.map(
            (book) => {
                return <BookItems book={book}></BookItems>
            }
        );
    }
}