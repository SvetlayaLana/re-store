class BookstoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'Atlas Shrugged',
                author: 'Ayn Rand'
            },
            {
                id: 2,
                title: 'Three men in a boat',
                author: 'Jerome K. Jerome'
            }
        ];
    }
}

const bookstoreService = new BookstoreService();

export default bookstoreService;