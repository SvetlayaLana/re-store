class BookstoreService {

    data = [
        {
            id: 1,
            title: 'Atlas Shrugged',
            author: 'Ayn Rand',
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/91Cu%2Bck0pYL._SY445_.jpg'
        },
        {
            id: 2,
            title: 'Three men in a boat',
            author: 'Jerome K. Jerome',
            price: 127,
            coverImage: 'https://images-eu.ssl-images-amazon.com/images/I/61toNHaO00L.jpg'
        }
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() > 0.75){
                    reject(new Error('Shit happens'))
                }else {
                    resolve(this.data)
                }
            }, 1000)
        });
    }
}

const bookstoreService = new BookstoreService();

export default bookstoreService;
