const myLibrary = [];

//Book Object Constructor
function Book(title, author, pageCount, status) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.status = status;
} 

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

//adding books is done from here
document.addEventListener('DOMContentLoaded', ()=>{
  addBookButton.addEventListener('click', addBookToLibrary);
})

overlay.addEventListener('click', () => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
})

addBookButton.addEventListener('click', () => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
});

//Functions
//Pushes a new book to the end of the myLibrary array
const addBookToLibrary = () => {

  //Prevents form from refreshing
  event.preventDefault();

  //Selectors
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pageCount = document.getElementById('pageCount');
  const readStatus = document.getElementById('readStatus');

  //Creates a new book object and adds it to the array
  const book = new Book(title.value, author.value, pageCount.value, readStatus.value);
  console.log(book);

  myLibrary.push(book);
  console.log(myLibrary);

  //Form is cleared without refreshing the page
  document.querySelector('form').reset();

  displayBook(myLibrary);
}


const displayBook= (myLibrary) => {
 

  if(myLibrary !== undefined){

      //creating book div container
      const bookDiv = document.createElement("div");
      bookDiv.classList.add("book");

      //creating the title, author, pagecount, and status elements.
      const titleDiv = document.createElement("div");
      titleDiv.innerText = '"' + myLibrary[(myLibrary.length-1)].title + '"';
      bookDiv.appendChild(titleDiv);

      const authorDiv = document.createElement("div");
      authorDiv.innerText = "by" + myLibrary[(myLibrary.length-1)].author;
      bookDiv.appendChild(authorDiv);

      const pageCountDiv = document.createElement("div");
      pageCountDiv.innerText = myLibrary[(myLibrary.length-1)].pageCount + ' pages';
      bookDiv.appendChild(pageCountDiv);

      const main = document.querySelector('main');
      main.appendChild(bookDiv);
    
  }
}