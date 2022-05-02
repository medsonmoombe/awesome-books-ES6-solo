
import showListBooks from "./modules/showbooks.js";
import addBook from "./modules/addbooks.js";
import deleteBooks from "./modules/delete-books.js";


 const bookList = document.querySelector('.book-list');
 const addBtn = document.querySelector('.add-btn');


bookList.addEventListener('click', deleteBooks);
addBtn.addEventListener('click', addBook);
document.addEventListener('DOMContentLoaded', showListBooks);


// getting html element

const listLinkId = document.getElementById('listId');
const addBooksLinkId = document.getElementById('addBookId');
const contactLinkId = document.getElementById('contactId');

const showBookSection = document.querySelector('.showBook-section');
const addBookSection = document.querySelector('.addBook-section');
const contactSection = document.querySelector('.contact-section');

showBookSection.style.display = 'block';
addBookSection.style.display = 'none';
contactSection.style.display = 'none';

// adding addEventListener to nav-bar item link

listLinkId.addEventListener('click', () => {
  showBookSection.style.display = 'block';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'none';
});

addBooksLinkId.addEventListener('click', () => {
  showBookSection.style.display = 'none';
  addBookSection.style.display = 'block';
  contactSection.style.display = 'none';
});

contactLinkId.addEventListener('click', () => {
  showBookSection.style.display = 'none';
  addBookSection.style.display = 'none';
  contactSection.style.display = 'block';
});