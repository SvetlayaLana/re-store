import React from 'react';
import { BookstoreServiceConsumer } from "../BookstoreServiceContext";

const witBookstoreService = () => (Wrapped) => {
    return (props) => {
        return(
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return <Wrapped {...props} bookstoreService={bookstoreService} />
                    }
                }
            </BookstoreServiceConsumer>
        );
    }
};

export { witBookstoreService };