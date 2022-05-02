


export default class Library {
    static books=[];
  
    listBooks;
  
    static addBook =(e) => {
      e.preventDefault();
      this.books = JSON.parse(localStorage.getItem('books')) !== null ? (this.books = JSON.parse(localStorage.getItem('books'))) : [];
  
      this.book = {
        id: 0,
        title: '',
        author: '',
      };
  
      if (title.value === '' || author.value === '') {
        return false;
      }
  
      this.book.title = title.value;
      this.book.author = author.value;
      this.book.id = this.books.length + 1;
      this.books.push(this.book);
      localStorage.setItem('books', JSON.stringify(this.books));
      title.value = '';
      author.value = '';
  
      this.showListBooks();
      return true;
    }
  
    static showListBooks = () => {
      bookList.innerHTML = '';
      this.listBooks = JSON.parse(localStorage.getItem('books'));
      this.listBooks.forEach((element) => {
        const listTag = `
              <div class="add-books">
                <p>"${element.title}" by ${element.author}</p>
                <button type="button" class="remove-btn" id="${element.id}">Remove</button>
              </div>
          `;
        bookList.innerHTML += listTag;
      });
      return this.bookList;
    }
  
         static deleteBooks =(e) => {
           if (e.target.classList.contains('remove-btn')) {
             const id = e.target.attributes.id.value;
             const filteredBooks = this.listBooks.filter((book) => book.id !== +id);
             this.listbooks = JSON.parse(localStorage.getItem('books'));
             localStorage.setItem(
               'books',
               JSON.stringify(filteredBooks),
             );
             this.showListBooks();
           }
         }
  }