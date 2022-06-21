let myLibrary = [
  {title: "book" , author: "book" , pageCount: "book" , status: "Read"}
];


function Book(title, author, pageCount, status) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.status = status;
}

function addBookToLibrary() {

}

const $bookTitle = document.querySelector('#bookTitle');
const $bookAuthor = document.querySelector('#bookAuthor');
const $bookPageCount = document.querySelector('#bookPageCount');
const $bookbookStatus = document.querySelector('#bookbookStatus');

console.log($bookTitle.value)













const popUpButton = document.getElementById("popUpButton");
const formPopUp = document.getElementById("formPopUp");
const submitButtion = document.getElementById("addBookButton");

popUpButton.addEventListener('click', () => {
  formPopUp.classList.add('show');
});

submitButtion.addEventListener('click', () => {
  formPopUp.classList.remove('show');
});