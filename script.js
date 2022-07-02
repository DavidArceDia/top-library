/*
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


*/









//Selectors
const modalButton = document.getElementById("modalButton");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const addBookButton = document.getElementById("addBookButton");

//Event Listeners
modalButton.addEventListener('click', () => {
  modal.classList.add('active');
  overlay.classList.add('active');
});


overlay.addEventListener('click', () => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
})

addBookButton.addEventListener('click', () => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
});
//Functions