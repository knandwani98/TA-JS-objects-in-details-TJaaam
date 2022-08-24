// - User can add a new book by adding the name, author and url of the image
// - Once added the book will be marked not read
// - You can change the state of the book to `Read` and it will be marked as completed
// - User can delete the book

class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
    this.isRead = false;
  }
  createUI() {
    let addBtn = document.querySelector(".submit");
    addBtn.addEventListener("click", () => {
      console.log("clicked");
    });
  }
}

class BookList {
  constructor() {
    this.list = [];
  }
  addBook() {
    let book = new Book(title, author, id);
    this.list.push(book);
  }
}

let book1 = new Book("Silver Lining Playbook", "Sam Mendis", 241412694530);
