import showListBooks from "./showbooks.js";

const deleteBooks = (e) => {
    if (e.target.classList.contains('remove-btn')) {
        const id = e.target.attributes.id.value;
        let listBooks;
        const filteredBooks = JSON.parse(localStorage.getItem('books')).filter(
            (book) => book.id !== +id,
          );
        listBooks = JSON.parse(localStorage.getItem('books'));
        localStorage.setItem(
            'books',
            JSON.stringify(filteredBooks),);
        showListBooks();
    };
};

export default deleteBooks;