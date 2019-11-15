import React from 'react';

class BookList extends React.Component{
    render() {
        const { books } = this.props;
        return(
            <ul>
                {
                    books.map((book))
                }
            </ul>
        )
    }
};

export default BookList;